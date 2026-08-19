/*
 * The MIT License
 *
 * Copyright 2025 Chistyakov Alexander.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

#include <chrono>
#include <memory>
#include <memory_resource>
#include <shared_mutex>
#include <thread>

#include <boost/asio.hpp>
#include <boost/thread.hpp>

#include "raft_le/details/allocator.h"
#include "raft_le/details/scheduler.h"

namespace wstux {
namespace raft {
namespace le {
namespace details {

////////////////////////////////////////////////////////////////////////////////
// struct scheduler::task

/**
 *  \brief  Internal structure representing a scheduler task.
 *
 *  \details    Encapsulates a Boost.Asio timer, a cancellation flag, and
 *      a user functor.
 */
struct scheduler::task final
{
    /// \brief  Constructor.
    /// \param  h - user handler.
    /// \param  io - asio asynchronous context.
    task(const scheduler::handler_type& h, boost::asio::io_context& io, const std::pmr::polymorphic_allocator<task>& a)
        : is_cancelled(true)
        , exec(h)
        , timer(io)
        , alloc(a)
    {}

    /// \brief  Executes the user functor if the task has not been canceled.
    void execute()
    {
        if (! is_cancelled.load()) {
            exec();
        }
    }

    /// \brief  Sets the task to the "canceled" state and interrupts the timer wait.
    void cancel()
    {
        is_cancelled.store(true);
        timer.cancel();
    }

    /// \brief  Resets the cancellation flag, preparing the task for execution.
    void resume() { is_cancelled.store(false); }

    /// @brief  Callback method for the asynchronous asio timer.
    /// @param  task - the task, extending its lifetime for the duration of the callback.
    /// @param  ec - error code returned by the operating system or the boost.asio library.
    static void handler(scheduler::task_type task, const boost::system::error_code& ec)
    {
        try {
            if (! ec) {
                task->execute();
            }
        } catch (const boost::thread_interrupted& /*ex*/) {
            // Catching thread execution interruption.
        } catch (const std::exception& /*ex*/) {
            // Catching any standard exceptions inside user code.
        }
    }

    std::atomic_bool is_cancelled;   ///< Flag indicating the cancellation/activity state of the task.
    scheduler::handler_type exec;    ///< User handler.
    boost::asio::steady_timer timer; ///< Timer for implementing execution delays.

    friend void intrusive_ptr_add_ref(const task* ptr) noexcept;
    friend void intrusive_ptr_release(task* ptr) noexcept;

private:
    std::pmr::polymorphic_allocator<task> alloc;
    mutable std::atomic_uint ref_counter{0};
};

////////////////////////////////////////////////////////////////////////////////
// class scheduler::context

/**
 *  \brief  Internal scheduler context.
 *
 *  \details    Hides boost.asio implementation details from the header file
 *      (pimpl pattern).
 */
struct scheduler::context final
{
    using work_guiard_t = boost::asio::executor_work_guard<boost::asio::io_context::executor_type>;

    /// \brief  Constructor.
    /// \param  pool_size - number of worker threads.
    context(size_t pool_size, std::pmr::memory_resource* p_pmr_res)
        : threads_size(pool_size)
        , p_pmr_resource(p_pmr_res)
        , io_ctx()
        , strand(boost::asio::make_strand(io_ctx))
    {}

    bool is_stopped() const { return (thread_pool.get() == nullptr); }

    /// \brief  Populates the thread_pool with tasks executing io_ctx.run().
    void start()
    {
        if (! is_stopped()) {
            stop();
        }
        if (threads_size == 0) {
            return;
        }

        //work_guard = std::make_unique<work_guiard_t>(boost::asio::make_work_guard(io_ctx));
        work_guard = make_pmr_unique<work_guiard_t, pmr_deleter<work_guiard_t>>(p_pmr_resource, boost::asio::make_work_guard(io_ctx));
        //thread_pool = std::make_unique<boost::asio::thread_pool>(threads_size);
        thread_pool = make_pmr_unique<boost::asio::thread_pool, pmr_deleter<boost::asio::thread_pool>>(p_pmr_resource, threads_size);

        // Restart io_ctx processing on the new pool threads
        for (size_t i = 0; i < threads_size; ++i) {
            boost::asio::post(*thread_pool, [this]() { io_ctx.run(); });
        }
    }

    void stop()
    {
        if (is_stopped()) {
            return;
        }
        work_guard.reset();

        // Stops the processing of new tasks in the pool immediately.
        io_ctx.stop();

        // Blocks the calling thread until all worker threads finish execution.
        thread_pool->stop();
        thread_pool->join();
        thread_pool.reset();

        io_ctx.restart();
    }

    std::atomic_size_t threads_size;

    std::pmr::memory_resource* p_pmr_resource;
    memory_pool<task, 3> mempool;

    boost::asio::io_context io_ctx;
    boost::asio::strand<boost::asio::io_context::executor_type> strand;
    //std::unique_ptr<work_guiard_t> work_guard; ///< Ensures that io_ctx.run() does not exit the loop when there are no more tasks.
    pmr_unique_ptr<work_guiard_t> work_guard; ///< Ensures that io_ctx.run() does not exit the loop when there are no more tasks.
    //std::unique_ptr<boost::asio::thread_pool> thread_pool; ///< Boost.asio execution thread pool.
    pmr_unique_ptr<boost::asio::thread_pool> thread_pool; ///< Boost.asio execution thread pool.
    std::shared_mutex pool_mutex; ///< Protects the recreation operations of the thread_pool.
};

////////////////////////////////////////////////////////////////////////////////
// class scheduler::context_deleter

void scheduler::context_deleter::operator()(context* ptr) const
{
    pmr_deleter<context>{p_pmr_resource}(ptr);
}

////////////////////////////////////////////////////////////////////////////////
// class scheduler

scheduler::scheduler(size_t pool_size, std::pmr::memory_resource* p_pmr_resource)
    : m_p_ctx(make_pmr_unique<context, context_deleter>(p_pmr_resource, thread_pool_size(pool_size), p_pmr_resource))
    , m_p_pmr_resource(p_pmr_resource)
{}

scheduler::~scheduler()
{
    stop();
}

void scheduler::cancel(const task_type& task)
{
    if (task) {
        task->cancel();
    }
}

void scheduler::execute_async(const handler_type& handler)
{
    if (m_is_stop.load(std::memory_order_acquire)) {
        return;
    }
    boost::asio::post(m_p_ctx->io_ctx, handler);
}

void scheduler::execute_strand(const handler_type& handler)
{
    if (m_is_stop.load(std::memory_order_acquire)) {
        return;
    }
    boost::asio::post(m_p_ctx->strand, handler);
}

bool scheduler::is_canceled(const task_type& task) const
{
    return task->is_cancelled.load();
}

scheduler::task_type scheduler::make_task(const handler_type& handler) const
{
    using traits = std::allocator_traits<std::pmr::polymorphic_allocator<task>>;

    std::pmr::polymorphic_allocator<task>& alloc = m_p_ctx->mempool.allocator;
    task* p_raw_task = alloc.allocate(1);

    try {
        traits::construct(alloc, p_raw_task, handler, m_p_ctx->io_ctx, alloc);
    } catch (...) {
        alloc.deallocate(p_raw_task, 1);
        throw;
    }
    return task_type(p_raw_task);
    //return std::allocate_shared<task>(m_p_ctx->task_pool.allocator, handler, m_p_ctx->io_ctx);
}

void scheduler::reconfigure(size_t new_size)
{
    if (m_is_stop.load(std::memory_order_acquire)) {
        return;
    }

    new_size = thread_pool_size(new_size);

    std::unique_lock<std::shared_mutex> lock(m_p_ctx->pool_mutex);

    if (m_p_ctx->threads_size == new_size) {
        return;
    }
    if (m_p_ctx->is_stopped()) {
        return;
    }

    // Pool restart. Stop and destroy the thread_pool. All scheduled tasks remain inside io_ctx.
    m_p_ctx->stop();

    // Update size configuration
    m_p_ctx->threads_size.store(new_size);
    // Restart io_ctx processing on the new pool threads
    m_p_ctx->start();
}

void scheduler::reschedule(const task_type& task, int32_t ms)
{
    cancel(task);
    schedule(task, ms);
}

void scheduler::reset_task(task_type& task) const
{
    task.reset();
}

void scheduler::schedule(const task_type& task, int32_t ms)
{
    if (m_is_stop.load(std::memory_order_acquire)) {
        return;
    }

    std::shared_lock<std::shared_mutex> lock(m_p_ctx->pool_mutex);

    // Prevention of rescheduling an already active task
    if (! task || ! task->is_cancelled) {
        return;
    }

    task->resume();

    task->timer.expires_after(std::chrono::milliseconds(ms));
    task->timer.async_wait(boost::asio::bind_executor(m_p_ctx->strand, std::bind(&task::handler, task, std::placeholders::_1)));
}

void scheduler::start()
{
    bool expected = true;
    if (! m_is_stop.compare_exchange_strong(expected, false)) {
        return;
    }

    std::unique_lock<std::shared_mutex> lock(m_p_ctx->pool_mutex);
    m_p_ctx->start();
}

void scheduler::stop()
{
    bool expected = false;
    if (! m_is_stop.compare_exchange_strong(expected, true)) {
        return;
    }

    std::unique_lock<std::shared_mutex> lock(m_p_ctx->pool_mutex);
    m_p_ctx->stop();
}

size_t scheduler::thread_pool_size(size_t pool_size)
{
    if (! pool_size) {
        pool_size = std::thread::hardware_concurrency();
    }
    if (! pool_size) {
        pool_size = 1;
    }
    return pool_size;
}

size_t scheduler::threads_size() const
{
    return m_p_ctx->threads_size.load();
}

void intrusive_ptr_add_ref(const scheduler::task_type::element_type* ptr) noexcept
{
    ++(ptr->ref_counter);
}

void intrusive_ptr_release(scheduler::task_type::element_type* ptr) noexcept
{
    if ((--(ptr->ref_counter)) == 0) {
        using allocator_type = std::pmr::polymorphic_allocator<scheduler::task_type::element_type>;
        using traits = std::allocator_traits<allocator_type>;

        allocator_type alloc = ptr->alloc;
        traits::destroy(alloc, ptr);
        alloc.deallocate(ptr, 1);
    }
}

} // namespace details
} // namespace le
} // namespace raft
} // namespace wstux
