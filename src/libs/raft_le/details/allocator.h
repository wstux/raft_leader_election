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

} // namespace details
} // namespace le
} // namespace raft
} // namespace wstux

#endif /* _LIBS_RAFT_LEADER_ELECTION_ALLOCATOR_H_ */
