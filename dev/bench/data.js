window.BENCHMARK_DATA = {
  "lastUpdate": 1787677211855,
  "repoUrl": "https://github.com/wstux/raft_leader_election",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "wstux1@gmail.com",
            "name": "wstux",
            "username": "wstux"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "539624e1b6ce430129567471b3b46a984f5c318d",
          "message": "* all: #26 Merge remote-tracking branch 'wstux/bugfix/is_stop';",
          "timestamp": "2026-08-25T19:57:37+03:00",
          "tree_id": "1e23aff355b8c8a2b513ed8bd141f143dc84808a",
          "url": "https://github.com/wstux/raft_leader_election/commit/539624e1b6ce430129567471b3b46a984f5c318d"
        },
        "date": 1787677211327,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "leader_election<3>",
            "value": 41.36764421000009,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.33630375000000035 ms\nthreads: 1"
          },
          {
            "name": "leader_election<5>",
            "value": 42.08667316999936,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.763597520000004 ms\nthreads: 1"
          },
          {
            "name": "leader_election<7>",
            "value": 42.52440105000346,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 1.2858168999999986 ms\nthreads: 1"
          },
          {
            "name": "leader_election_default<3>",
            "value": 632.7276119000061,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 0.7850358000000224 ms\nthreads: 1"
          },
          {
            "name": "leader_election_default<5>",
            "value": 589.1793224999986,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 1.3733478000000021 ms\nthreads: 1"
          },
          {
            "name": "leader_election_default<7>",
            "value": 571.4614855999997,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 1.7098741999999945 ms\nthreads: 1"
          },
          {
            "name": "check_contact_quorum/threads:1",
            "value": 4.459247273738747,
            "unit": "ns/iter",
            "extra": "iterations: 157874444\ncpu: 4.45881164908489 ns\nthreads: 1"
          },
          {
            "name": "check_contact_quorum/threads:2",
            "value": 28.1611041824231,
            "unit": "ns/iter",
            "extra": "iterations: 24635096\ncpu: 28.159601326497768 ns\nthreads: 2"
          },
          {
            "name": "check_contact_quorum/threads:4",
            "value": 92.68074425438567,
            "unit": "ns/iter",
            "extra": "iterations: 7544356\ncpu: 92.56267002776647 ns\nthreads: 4"
          },
          {
            "name": "check_contact_quorum/threads:8",
            "value": 149.8874538720559,
            "unit": "ns/iter",
            "extra": "iterations: 10423184\ncpu: 89.08632381429705 ns\nthreads: 8"
          },
          {
            "name": "request_to_list/threads:1",
            "value": 17.74469018846682,
            "unit": "ns/iter",
            "extra": "iterations: 39502532\ncpu: 17.74331680814789 ns\nthreads: 1"
          },
          {
            "name": "request_to_list/threads:2",
            "value": 18.16592570066908,
            "unit": "ns/iter",
            "extra": "iterations: 38494344\ncpu: 18.165731802053834 ns\nthreads: 2"
          },
          {
            "name": "request_to_list/threads:4",
            "value": 34.77990504077897,
            "unit": "ns/iter",
            "extra": "iterations: 20185928\ncpu: 34.73710334248691 ns\nthreads: 4"
          },
          {
            "name": "request_to_list/threads:8",
            "value": 58.242427653647674,
            "unit": "ns/iter",
            "extra": "iterations: 17322504\ncpu: 34.69156497236198 ns\nthreads: 8"
          },
          {
            "name": "request_lock_list/threads:1",
            "value": 1.3646141277387434,
            "unit": "ns/iter",
            "extra": "iterations: 513066680\ncpu: 1.364529472075638 ns\nthreads: 1"
          },
          {
            "name": "request_lock_list/threads:2",
            "value": 1.365822639091638,
            "unit": "ns/iter",
            "extra": "iterations: 512363118\ncpu: 1.3657304661808223 ns\nthreads: 2"
          },
          {
            "name": "request_lock_list/threads:4",
            "value": 2.7414586284864244,
            "unit": "ns/iter",
            "extra": "iterations: 253100336\ncpu: 2.7375833748399305 ns\nthreads: 4"
          },
          {
            "name": "request_lock_list/threads:8",
            "value": 4.718932173428343,
            "unit": "ns/iter",
            "extra": "iterations: 262538288\ncpu: 2.7311668993590787 ns\nthreads: 8"
          },
          {
            "name": "serialize_message",
            "value": 0.5460552518787369,
            "unit": "ns/iter",
            "extra": "iterations: 1283001549\ncpu: 0.5459759620290217 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}