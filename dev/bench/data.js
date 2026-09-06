window.BENCHMARK_DATA = {
  "lastUpdate": 1788706046827,
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
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Leader Election (Real Time)::3 nodes",
            "value": 41.36764421000009,
            "unit": "ms",
            "extra": "iterations: 100\ncpu: 0.33630375000000035 ms\nthreads: 1"
          },
          {
            "name": "Leader Election (CPU Time)::3 nodes",
            "value": 0.33630375000000035,
            "unit": "ms",
            "extra": "iterations: 100\ncpu: 0.33630375000000035 ms\nthreads: 1"
          },
          {
            "name": "Leader Election (Real Time)::5 nodes",
            "value": 42.08667316999936,
            "unit": "ms",
            "extra": "iterations: 100\ncpu: 0.763597520000004 ms\nthreads: 1"
          },
          {
            "name": "Leader Election (CPU Time)::5 nodes",
            "value": 0.763597520000004,
            "unit": "ms",
            "extra": "iterations: 100\ncpu: 0.763597520000004 ms\nthreads: 1"
          },
          {
            "name": "Leader Election (Real Time)::7 nodes",
            "value": 42.52440105000346,
            "unit": "ms",
            "extra": "iterations: 100\ncpu: 1.2858168999999986 ms\nthreads: 1"
          },
          {
            "name": "Leader Election (CPU Time)::7 nodes",
            "value": 1.2858168999999986,
            "unit": "ms",
            "extra": "iterations: 100\ncpu: 1.2858168999999986 ms\nthreads: 1"
          },
          {
            "name": "Leader Election Default (Real Time)::3 nodes",
            "value": 632.7276119000061,
            "unit": "ms",
            "extra": "iterations: 10\ncpu: 0.7850358000000224 ms\nthreads: 1"
          },
          {
            "name": "Leader Election Default (CPU Time)::3 nodes",
            "value": 0.7850358000000224,
            "unit": "ms",
            "extra": "iterations: 10\ncpu: 0.7850358000000224 ms\nthreads: 1"
          },
          {
            "name": "Leader Election Default (Real Time)::5 nodes",
            "value": 589.1793224999986,
            "unit": "ms",
            "extra": "iterations: 10\ncpu: 1.3733478000000021 ms\nthreads: 1"
          },
          {
            "name": "Leader Election Default (CPU Time)::5 nodes",
            "value": 1.3733478000000021,
            "unit": "ms",
            "extra": "iterations: 10\ncpu: 1.3733478000000021 ms\nthreads: 1"
          },
          {
            "name": "Leader Election Default (Real Time)::7 nodes",
            "value": 571.4614855999997,
            "unit": "ms",
            "extra": "iterations: 10\ncpu: 1.7098741999999945 ms\nthreads: 1"
          },
          {
            "name": "Leader Election Default (CPU Time)::7 nodes",
            "value": 1.7098741999999945,
            "unit": "ms",
            "extra": "iterations: 10\ncpu: 1.7098741999999945 ms\nthreads: 1"
          },
          {
            "name": "Check Contact Quorum (Real Time)::1 threads",
            "value": 4.459247273738747,
            "unit": "ns",
            "extra": "iterations: 157874444\ncpu: 4.45881164908489 ns\nthreads: 1"
          },
          {
            "name": "Check Contact Quorum (Real Time)::2 threads",
            "value": 28.1611041824231,
            "unit": "ns",
            "extra": "iterations: 24635096\ncpu: 28.159601326497768 ns\nthreads: 2"
          },
          {
            "name": "Check Contact Quorum (Real Time)::4 threads",
            "value": 92.68074425438567,
            "unit": "ns",
            "extra": "iterations: 7544356\ncpu: 92.56267002776647 ns\nthreads: 4"
          },
          {
            "name": "Check Contact Quorum (Real Time)::8 threads",
            "value": 149.8874538720559,
            "unit": "ns",
            "extra": "iterations: 10423184\ncpu: 89.08632381429705 ns\nthreads: 8"
          },
          {
            "name": "Request to List (Real Time)::1 threads",
            "value": 17.74469018846682,
            "unit": "ns",
            "extra": "iterations: 39502532\ncpu: 17.74331680814789 ns\nthreads: 1"
          },
          {
            "name": "Request to List (Real Time)::2 threads",
            "value": 18.16592570066908,
            "unit": "ns",
            "extra": "iterations: 38494344\ncpu: 18.165731802053834 ns\nthreads: 2"
          },
          {
            "name": "Request to List (Real Time)::4 threads",
            "value": 34.77990504077897,
            "unit": "ns",
            "extra": "iterations: 20185928\ncpu: 34.73710334248691 ns\nthreads: 4"
          },
          {
            "name": "Request to List (Real Time)::8 threads",
            "value": 58.242427653647674,
            "unit": "ns",
            "extra": "iterations: 17322504\ncpu: 34.69156497236198 ns\nthreads: 8"
          },
          {
            "name": "Request Lock List (Real Time)::1 threads",
            "value": 1.3646141277387434,
            "unit": "ns",
            "extra": "iterations: 513066680\ncpu: 1.364529472075638 ns\nthreads: 1"
          },
          {
            "name": "Request Lock List (Real Time)::2 threads",
            "value": 1.365822639091638,
            "unit": "ns",
            "extra": "iterations: 512363118\ncpu: 1.3657304661808223 ns\nthreads: 2"
          },
          {
            "name": "Request Lock List (Real Time)::4 threads",
            "value": 2.7414586284864244,
            "unit": "ns",
            "extra": "iterations: 253100336\ncpu: 2.7375833748399305 ns\nthreads: 4"
          },
          {
            "name": "Request Lock List (Real Time)::8 threads",
            "value": 4.718932173428343,
            "unit": "ns",
            "extra": "iterations: 262538288\ncpu: 2.7311668993590787 ns\nthreads: 8"
          },
          {
            "name": "Serialize Message (Real Time)::Base",
            "value": 0.5460552518787369,
            "unit": "ns",
            "extra": "iterations: 1283001549\ncpu: 0.5459759620290217 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "462ea3ab3a419c661c5ae65e20671340f840cb14",
          "message": "* all: #27 Merge remote-tracking branch 'wstux/feature/github_actions';",
          "timestamp": "2026-08-25T22:48:58+03:00",
          "tree_id": "9966b62c58f71920b884148f5c690874d0abf7a0",
          "url": "https://github.com/wstux/raft_leader_election/commit/462ea3ab3a419c661c5ae65e20671340f840cb14"
        },
        "date": 1787687517400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Leader Election (Real Time)::3 nodes",
            "value": 41.44654836000228,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::3 nodes",
            "value": 0.37540378000000096,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::5 nodes",
            "value": 42.011793209998984,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::5 nodes",
            "value": 0.8200491100000038,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::7 nodes",
            "value": 43.94043772000174,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::7 nodes",
            "value": 1.4519588100000018,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::3 nodes",
            "value": 695.2629804000082,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::3 nodes",
            "value": 0.9825335999999574,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::5 nodes",
            "value": 609.2897692999856,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::5 nodes",
            "value": 1.3174234000000062,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::7 nodes",
            "value": 565.8748855000027,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::7 nodes",
            "value": 1.9224650999999817,
            "unit": "ms"
          },
          {
            "name": "Check Contact Quorum (Real Time)::1 threads",
            "value": 5.713500969813915,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::2 threads",
            "value": 57.25875226000947,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::4 threads",
            "value": 115.27677727747839,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::8 threads",
            "value": 188.23478909976458,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::1 threads",
            "value": 22.852178713471936,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::2 threads",
            "value": 23.418577088253617,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::4 threads",
            "value": 45.20300812262107,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::8 threads",
            "value": 78.06587567468266,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::1 threads",
            "value": 1.7829470828268246,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::2 threads",
            "value": 1.762516207094626,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::4 threads",
            "value": 3.520957245655817,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::8 threads",
            "value": 6.748353066215472,
            "unit": "ns"
          },
          {
            "name": "Serialize Message (Real Time)::Base",
            "value": 0.7033844075851101,
            "unit": "ns"
          }
        ]
      },
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
          "id": "041311e81cadf8247af28407e8affcbf21be0241",
          "message": "* all: #29 Merge remote-tracking branch 'wstux/feature/update_cmake';",
          "timestamp": "2026-08-26T21:12:16+03:00",
          "tree_id": "c7d39b84d437c8483eab988c8894a79c924d3b8a",
          "url": "https://github.com/wstux/raft_leader_election/commit/041311e81cadf8247af28407e8affcbf21be0241"
        },
        "date": 1787768122123,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Leader Election (Real Time)::3 nodes",
            "value": 41.90531576999973,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::3 nodes",
            "value": 0.38530617000000006,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::5 nodes",
            "value": 42.5232643099983,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::5 nodes",
            "value": 0.871037340000001,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::7 nodes",
            "value": 43.03699053999764,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::7 nodes",
            "value": 1.5332484200000056,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::3 nodes",
            "value": 700.2253757000062,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::3 nodes",
            "value": 1.1479096999999827,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::5 nodes",
            "value": 559.7641118999945,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::5 nodes",
            "value": 1.5818283000000766,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::7 nodes",
            "value": 562.1254271000026,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::7 nodes",
            "value": 1.9267513000000402,
            "unit": "ms"
          },
          {
            "name": "Check Contact Quorum (Real Time)::1 threads",
            "value": 5.748102189670789,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::2 threads",
            "value": 51.850423058681855,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::4 threads",
            "value": 143.59062544769742,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::8 threads",
            "value": 234.769034141187,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::1 threads",
            "value": 22.82533110197752,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::2 threads",
            "value": 23.071065466369898,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::4 threads",
            "value": 46.42913603698213,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::8 threads",
            "value": 87.99761711096814,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::1 threads",
            "value": 1.5567021157153365,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::2 threads",
            "value": 1.5610458101935123,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::4 threads",
            "value": 3.6833516301639633,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::8 threads",
            "value": 6.108256431384868,
            "unit": "ns"
          },
          {
            "name": "Serialize Message (Real Time)::Base",
            "value": 0.6259976990816972,
            "unit": "ns"
          }
        ]
      },
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
          "id": "93727eeb956870dc144aa011adc6daef5b83169e",
          "message": "* all: #31 Merge remote-tracking branch 'wstux/bugfix/github_actions';",
          "timestamp": "2026-08-27T11:06:02+03:00",
          "tree_id": "c7d39b84d437c8483eab988c8894a79c924d3b8a",
          "url": "https://github.com/wstux/raft_leader_election/commit/93727eeb956870dc144aa011adc6daef5b83169e"
        },
        "date": 1787818141530,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Leader Election (Real Time)::3 nodes",
            "value": 41.81645692000643,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::3 nodes",
            "value": 0.37478913999999947,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::5 nodes",
            "value": 42.20113864999747,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::5 nodes",
            "value": 0.8247755800000006,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::7 nodes",
            "value": 42.518188200003806,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::7 nodes",
            "value": 1.4690832500000217,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::3 nodes",
            "value": 636.9323300999724,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::3 nodes",
            "value": 0.9414503000000017,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::5 nodes",
            "value": 597.2328551999965,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::5 nodes",
            "value": 1.367466499999992,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::7 nodes",
            "value": 591.9299032999675,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::7 nodes",
            "value": 1.9711237000000323,
            "unit": "ms"
          },
          {
            "name": "Check Contact Quorum (Real Time)::1 threads",
            "value": 5.714860322506064,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::2 threads",
            "value": 37.35831137398656,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::4 threads",
            "value": 107.95306638347405,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::8 threads",
            "value": 214.0641352929561,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::1 threads",
            "value": 22.813006387799884,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::2 threads",
            "value": 23.172612467797137,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::4 threads",
            "value": 44.977081275835104,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::8 threads",
            "value": 71.72001233629084,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::1 threads",
            "value": 1.778651674358326,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::2 threads",
            "value": 1.915895492353803,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::4 threads",
            "value": 4.39266550930235,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::8 threads",
            "value": 5.753753090892194,
            "unit": "ns"
          },
          {
            "name": "Serialize Message (Real Time)::Base",
            "value": 0.7117021176464529,
            "unit": "ns"
          }
        ]
      },
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
          "id": "2b76224d317e614423b358ea50d1f65bf1ab6ec9",
          "message": "* all: #32 Merge remote-tracking branch 'wstux/release/v0.1.1';",
          "timestamp": "2026-08-27T15:00:33+03:00",
          "tree_id": "7c3dd7dbe2ad8fd6bacaee16f506a574de9feb54",
          "url": "https://github.com/wstux/raft_leader_election/commit/2b76224d317e614423b358ea50d1f65bf1ab6ec9"
        },
        "date": 1787832226458,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Leader Election (Real Time)::3 nodes",
            "value": 41.4461221900001,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::3 nodes",
            "value": 0.3944279700000007,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::5 nodes",
            "value": 42.837674690006224,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::5 nodes",
            "value": 0.8878510999999989,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::7 nodes",
            "value": 43.17228561000775,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::7 nodes",
            "value": 1.616434720000008,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::3 nodes",
            "value": 669.2638084999658,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::3 nodes",
            "value": 0.9813892000000269,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::5 nodes",
            "value": 579.0847398999745,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::5 nodes",
            "value": 1.4311871999999282,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::7 nodes",
            "value": 574.1588281999611,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::7 nodes",
            "value": 2.198572000000043,
            "unit": "ms"
          },
          {
            "name": "Check Contact Quorum (Real Time)::1 threads",
            "value": 5.724360190442395,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::2 threads",
            "value": 45.292396630020974,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::4 threads",
            "value": 119.50642905809819,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::8 threads",
            "value": 188.45357653500912,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::1 threads",
            "value": 22.813993300264315,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::2 threads",
            "value": 24.065726801232,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::4 threads",
            "value": 63.000456661217754,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::8 threads",
            "value": 79.61047734115104,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::1 threads",
            "value": 1.759260062245738,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::2 threads",
            "value": 1.763169555069223,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::4 threads",
            "value": 3.5524137772395408,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::8 threads",
            "value": 6.039974990556101,
            "unit": "ns"
          },
          {
            "name": "Serialize Message (Real Time)::Base",
            "value": 0.7061554929634055,
            "unit": "ns"
          }
        ]
      },
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
          "id": "64537dc975765f6148852639ec412168d0c36964",
          "message": "Merge pull request #33 from wstux/feature/extra_members\n\n* all: #33 Merge remote-tracking branch 'wstux/feature/extra_members';",
          "timestamp": "2026-09-06T15:08:37+03:00",
          "tree_id": "f60423e8c1bc0f3f359eb5315fb1839fa2361fee",
          "url": "https://github.com/wstux/raft_leader_election/commit/64537dc975765f6148852639ec412168d0c36964"
        },
        "date": 1788696683740,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Leader Election (Real Time)::3 nodes",
            "value": 41.610194059999515,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::3 nodes",
            "value": 0.3756982199999998,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::5 nodes",
            "value": 42.39617190999894,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::5 nodes",
            "value": 0.8304727799999958,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::7 nodes",
            "value": 43.33173480000028,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::7 nodes",
            "value": 1.4630839700000047,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::3 nodes",
            "value": 662.9388239999969,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::3 nodes",
            "value": 0.9486296999999698,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::5 nodes",
            "value": 597.2169824000105,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::5 nodes",
            "value": 1.4081445000000081,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::7 nodes",
            "value": 563.8731035999939,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::7 nodes",
            "value": 1.9688092000000323,
            "unit": "ms"
          },
          {
            "name": "Check Contact Quorum (Real Time)::1 threads",
            "value": 5.719917909268862,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::2 threads",
            "value": 36.63832107165795,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::4 threads",
            "value": 115.6390642221932,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::8 threads",
            "value": 189.80640926225655,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::1 threads",
            "value": 22.89973954024901,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::2 threads",
            "value": 23.533011886591687,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::4 threads",
            "value": 44.804243627700465,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::8 threads",
            "value": 69.15143456005974,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::1 threads",
            "value": 1.7593287841258594,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::2 threads",
            "value": 1.7709348353696333,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::4 threads",
            "value": 3.5522692247660386,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::8 threads",
            "value": 6.082411205018575,
            "unit": "ns"
          },
          {
            "name": "Serialize Message (Real Time)::Base",
            "value": 0.703477203891969,
            "unit": "ns"
          }
        ]
      },
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
          "id": "2571b917a250e2b74c63b8a131d1bc3e311f590d",
          "message": "* all: #34 Merge remote-tracking branch 'wstux/bugfix/io_interface';",
          "timestamp": "2026-09-06T16:05:05+03:00",
          "tree_id": "316ab672582775677128e3e0a631267817bbd09d",
          "url": "https://github.com/wstux/raft_leader_election/commit/2571b917a250e2b74c63b8a131d1bc3e311f590d"
        },
        "date": 1788700080916,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Leader Election (Real Time)::3 nodes",
            "value": 41.39506518000018,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::3 nodes",
            "value": 0.3701140899999995,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::5 nodes",
            "value": 42.5315965799993,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::5 nodes",
            "value": 0.7981575700000014,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::7 nodes",
            "value": 43.05980719000189,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::7 nodes",
            "value": 1.3879095600000142,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::3 nodes",
            "value": 574.9515007999889,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::3 nodes",
            "value": 0.8263083999999864,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::5 nodes",
            "value": 635.6030530999959,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::5 nodes",
            "value": 1.2708517000000086,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::7 nodes",
            "value": 569.9524361000016,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::7 nodes",
            "value": 1.702662999999982,
            "unit": "ms"
          },
          {
            "name": "Check Contact Quorum (Real Time)::1 threads",
            "value": 4.321392426387627,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::2 threads",
            "value": 148.80815703779885,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::4 threads",
            "value": 249.65153706936468,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::8 threads",
            "value": 445.2743957606201,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::1 threads",
            "value": 61.173586957330514,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::2 threads",
            "value": 61.67908298165607,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::4 threads",
            "value": 124.11971480843346,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::8 threads",
            "value": 203.71034120872824,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::1 threads",
            "value": 2.476811955005337,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::2 threads",
            "value": 2.294021858854868,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::4 threads",
            "value": 2.8926636101457266,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::8 threads",
            "value": 4.64303001464762,
            "unit": "ns"
          },
          {
            "name": "Serialize Message (Real Time)::Base",
            "value": 0.5769010286922827,
            "unit": "ns"
          }
        ]
      },
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
          "id": "da03b3266eb7310f85434b62f32395f31e2ce947",
          "message": "* all: #35 Merge remote-tracking branch 'wstux/bugfix/race_condition';",
          "timestamp": "2026-09-06T16:29:05+03:00",
          "tree_id": "fe6635e7f3ce7fd93bb7e63ddc86e0628bfb3278",
          "url": "https://github.com/wstux/raft_leader_election/commit/da03b3266eb7310f85434b62f32395f31e2ce947"
        },
        "date": 1788701514060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Leader Election (Real Time)::3 nodes",
            "value": 41.51297996000153,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::3 nodes",
            "value": 0.3778203900000004,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::5 nodes",
            "value": 42.224678959993874,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::5 nodes",
            "value": 0.8568338200000086,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::7 nodes",
            "value": 43.446103979995875,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::7 nodes",
            "value": 1.40831089999999,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::3 nodes",
            "value": 659.3418156999917,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::3 nodes",
            "value": 0.9817858000000012,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::5 nodes",
            "value": 553.8065126000163,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::5 nodes",
            "value": 1.5149054000000217,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::7 nodes",
            "value": 578.5185719000083,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::7 nodes",
            "value": 1.914147900000018,
            "unit": "ms"
          },
          {
            "name": "Check Contact Quorum (Real Time)::1 threads",
            "value": 5.859434612258179,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::2 threads",
            "value": 60.41460035334609,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::4 threads",
            "value": 157.02922923946687,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::8 threads",
            "value": 362.41107938359613,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::1 threads",
            "value": 62.6385064108943,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::2 threads",
            "value": 62.979629987251045,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::4 threads",
            "value": 106.46301331737354,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::8 threads",
            "value": 173.7045355739433,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::1 threads",
            "value": 1.5573902640491089,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::2 threads",
            "value": 1.5613865510873197,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::4 threads",
            "value": 3.640786124100961,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::8 threads",
            "value": 7.278620140132841,
            "unit": "ns"
          },
          {
            "name": "Serialize Message (Real Time)::Base",
            "value": 0.6232637021993023,
            "unit": "ns"
          }
        ]
      },
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
          "id": "b7298ac4f294c938252d34eeb36f26714f05f461",
          "message": "* all: #36 Merge remote-tracking branch 'wstux/bugfix/logging_config';",
          "timestamp": "2026-09-06T16:35:53+03:00",
          "tree_id": "8ecc5f76f641a8fe8ab550d0682c5afd2e4c5c5d",
          "url": "https://github.com/wstux/raft_leader_election/commit/b7298ac4f294c938252d34eeb36f26714f05f461"
        },
        "date": 1788701928735,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Leader Election (Real Time)::3 nodes",
            "value": 42.14544997001326,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::3 nodes",
            "value": 0.4574754799999989,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::5 nodes",
            "value": 42.55989267001155,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::5 nodes",
            "value": 1.0394323499999971,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::7 nodes",
            "value": 44.26359000999696,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::7 nodes",
            "value": 1.486084240000003,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::3 nodes",
            "value": 627.4757129999784,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::3 nodes",
            "value": 1.189040299999955,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::5 nodes",
            "value": 587.5936779999847,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::5 nodes",
            "value": 1.773407000000038,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::7 nodes",
            "value": 583.1621637999774,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::7 nodes",
            "value": 2.0624878000000457,
            "unit": "ms"
          },
          {
            "name": "Check Contact Quorum (Real Time)::1 threads",
            "value": 5.669027064946174,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::2 threads",
            "value": 88.9115920887269,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::4 threads",
            "value": 218.80172512971095,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::8 threads",
            "value": 366.6953082533266,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::1 threads",
            "value": 63.67890802806742,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::2 threads",
            "value": 64.05018025656437,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::4 threads",
            "value": 110.61099517048713,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::8 threads",
            "value": 190.7408080660551,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::1 threads",
            "value": 1.5658406082956855,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::2 threads",
            "value": 1.5702346411947852,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::4 threads",
            "value": 4.615289762021872,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::8 threads",
            "value": 6.273574584062907,
            "unit": "ns"
          },
          {
            "name": "Serialize Message (Real Time)::Base",
            "value": 0.6287695386099028,
            "unit": "ns"
          }
        ]
      },
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
          "id": "c56ade6469dc7e11a205bc8efdc6b6bdf7c4cd90",
          "message": "* all: #37 Merge remote-tracking branch 'wstux/release/v0.1.2' into master;",
          "timestamp": "2026-09-06T16:55:24+03:00",
          "tree_id": "b97c87814445e07ebf125932223074652fbb475a",
          "url": "https://github.com/wstux/raft_leader_election/commit/c56ade6469dc7e11a205bc8efdc6b6bdf7c4cd90"
        },
        "date": 1788703102775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Leader Election (Real Time)::3 nodes",
            "value": 42.15715687999847,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::3 nodes",
            "value": 0.4747676900000005,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::5 nodes",
            "value": 43.972609209998836,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::5 nodes",
            "value": 1.0237254399999933,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::7 nodes",
            "value": 44.3967942100025,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::7 nodes",
            "value": 1.6297131399999947,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::3 nodes",
            "value": 611.3721618999989,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::3 nodes",
            "value": 1.140078500000019,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::5 nodes",
            "value": 592.3855534999916,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::5 nodes",
            "value": 1.811350800000011,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::7 nodes",
            "value": 585.3535008999927,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::7 nodes",
            "value": 2.311251600000097,
            "unit": "ms"
          },
          {
            "name": "Check Contact Quorum (Real Time)::1 threads",
            "value": 5.666857960831332,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::2 threads",
            "value": 104.03331198683276,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::4 threads",
            "value": 231.20206897957908,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::8 threads",
            "value": 380.27581484541093,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::1 threads",
            "value": 63.24675163341121,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::2 threads",
            "value": 64.4449580160454,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::4 threads",
            "value": 109.51443438722228,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::8 threads",
            "value": 188.3211753828234,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::1 threads",
            "value": 1.557883886352825,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::2 threads",
            "value": 1.783879869477557,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::4 threads",
            "value": 3.9007097255967094,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::8 threads",
            "value": 5.631447785128566,
            "unit": "ns"
          },
          {
            "name": "Serialize Message (Real Time)::Base",
            "value": 0.6235828849085588,
            "unit": "ns"
          }
        ]
      },
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
          "id": "f83b0f457275178820369e81a2a0074163518d8f",
          "message": "* all: #38 Merge remote-tracking branch 'wstux/feature/send_aliases' into master;",
          "timestamp": "2026-09-06T17:44:39+03:00",
          "tree_id": "f62250437a07d88c774833039f3554ccc9d23644",
          "url": "https://github.com/wstux/raft_leader_election/commit/f83b0f457275178820369e81a2a0074163518d8f"
        },
        "date": 1788706046361,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Leader Election (Real Time)::3 nodes",
            "value": 41.499099659999395,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::3 nodes",
            "value": 0.35821646000000107,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::5 nodes",
            "value": 42.86235972000071,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::5 nodes",
            "value": 0.8126568700000031,
            "unit": "ms"
          },
          {
            "name": "Leader Election (Real Time)::7 nodes",
            "value": 43.77476219999977,
            "unit": "ms"
          },
          {
            "name": "Leader Election (CPU Time)::7 nodes",
            "value": 1.4050622400000057,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::3 nodes",
            "value": 637.1642291000001,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::3 nodes",
            "value": 0.9189118000000107,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::5 nodes",
            "value": 654.544887299997,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::5 nodes",
            "value": 1.522033300000003,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (Real Time)::7 nodes",
            "value": 595.9910877999931,
            "unit": "ms"
          },
          {
            "name": "Leader Election Default (CPU Time)::7 nodes",
            "value": 1.8478308000000276,
            "unit": "ms"
          },
          {
            "name": "Check Contact Quorum (Real Time)::1 threads",
            "value": 5.838518336023904,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::2 threads",
            "value": 89.10849452099848,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::4 threads",
            "value": 228.86730867203542,
            "unit": "ns"
          },
          {
            "name": "Check Contact Quorum (Real Time)::8 threads",
            "value": 397.4615652613324,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::1 threads",
            "value": 63.21690807776007,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::2 threads",
            "value": 63.47953902459264,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::4 threads",
            "value": 106.83683288533489,
            "unit": "ns"
          },
          {
            "name": "Request to List (Real Time)::8 threads",
            "value": 174.4803360560425,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::1 threads",
            "value": 2.1792526487839665,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::2 threads",
            "value": 2.182023730814035,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::4 threads",
            "value": 4.97504854212272,
            "unit": "ns"
          },
          {
            "name": "Request Lock List (Real Time)::8 threads",
            "value": 9.0029068271611,
            "unit": "ns"
          },
          {
            "name": "Serialize Message (Real Time)::Base",
            "value": 0.6234035916061863,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}