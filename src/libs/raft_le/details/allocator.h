/*
 * The MIT License
 *
 * Copyright 2026 Chistyakov Alexander.
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

#ifndef _LIBS_RAFT_LEADER_ELECTION_ALLOCATOR_H_
#define _LIBS_RAFT_LEADER_ELECTION_ALLOCATOR_H_

#include <memory_resource>

namespace wstux {
namespace raft {
namespace le {
namespace details {

template<typename TType, unsigned int TCount>
struct memory_pool final
{
    using type = TType;

    static constexpr unsigned int size = sizeof(type) * TCount;

    memory_pool()
        : memory_buffer(buffer, size)
        , resource_pool(&memory_buffer)
        , allocator(&resource_pool)
    {}

    alignas(type) char buffer[size];

    std::pmr::monotonic_buffer_resource memory_buffer;
    std::pmr::synchronized_pool_resource resource_pool;
    std::pmr::polymorphic_allocator<type> allocator;
};

template<typename TType>
struct pmr_deleter
{
    void operator()(TType* ptr) const
    {
        if (ptr) {
            using traits = std::allocator_traits<std::pmr::polymorphic_allocator<TType>>;

            std::pmr::polymorphic_allocator<TType> alloc(p_pmr_resource);
            traits::destroy(alloc, ptr);
            traits::deallocate(alloc, ptr, 1);
        }
    }

    std::pmr::memory_resource* p_pmr_resource;
};

template<typename TType, typename TDeleter, typename... TArgs>
std::unique_ptr<TType, TDeleter> make_pmr_unique(std::pmr::memory_resource* p_pmr_resource, TArgs&&... args)
{
    using allocator_type = std::pmr::polymorphic_allocator<TType>;
    using traits = std::allocator_traits<allocator_type>;

    std::pmr::polymorphic_allocator<TType> alloc(p_pmr_resource);
    TType* p_raw = traits::allocate(alloc, 1);

    try {
        traits::construct(alloc, p_raw, std::forward<TArgs>(args)...);
    } catch (...) {
        traits::deallocate(alloc, p_raw, 1);
        throw;
    }
    return std::unique_ptr<TType, TDeleter>(p_raw, TDeleter{p_pmr_resource});
}

template<typename TType>
using pmr_unique_ptr = std::unique_ptr<TType, pmr_deleter<TType>>;

} // namespace details
} // namespace le
} // namespace raft
} // namespace wstux

#endif /* _LIBS_RAFT_LEADER_ELECTION_ALLOCATOR_H_ */
