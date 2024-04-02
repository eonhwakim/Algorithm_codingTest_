/**
 *
 * @param {*} n
 * @param {*} results
 * @returns
 *
 * 모든 노드에서 모든 노드까지 최소비용 구하기 -> '플로이드 와샬' 알고리즘
 *
 * 이기면 1, 지면 -1, 본인과 경기 하는 경우0 으로 이차원배열에 저장
 * 배열에 false 가 아닌 값이 n개인 리스트의 갯수를 구하면, 모든 선수와 경기한 결과를 확인할 수 있다.
 *
 * A -> B : A 가 이김
 */

function solution(n, results) {
  let answer = 0;
  //1. 노드 j 에서 i 로 가는 비용 배열 만들기, 초기값 false
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

  //2. 경기 결과에 따라 dp 배열에 값을 넣어주기
  results.forEach(([A, B]) => {
    dp[A][B] = 1; // 이긴 선수는 1
    dp[B][A] = -1; // 진 선수는 -1
    dp[A][A] = 0; // 본인은 0
    dp[B][B] = 0; // 본인은 0
  });

  const range = [...Array(n).keys()].map((i) => i + 1);

  //3. 플로이드 와샬 알고리즘
  for (const mid of range) {
    for (const A of range) {
      for (const B of range) {
        // A->mid (A 가 mid 이기고 ) mid->B (mid 가 B 이긴 경우)
        if (dp[A][mid] === 1 && dp[mid][B] === 1) dp[A][B] = 1;
        else if (dp[A][mid] === -1 && dp[mid][B] === -1) dp[A][B] = -1;
      }
    }
  }

  //4. 결과 확인
  for (const result of dp) {
    if (result.filter((x) => x !== false).length === n) answer++;
  }

  return answer;
}

// test
const n = 5;
const results = [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
];

console.log(solution(n, results)); // 2
