window.BENCHMARK_DATA = {
  "lastUpdate": 1787768122625,
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
      }
    ]
  }
}