window.BENCHMARK_DATA = {
  "lastUpdate": 1787818142092,
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
      }
    ]
  }
}
