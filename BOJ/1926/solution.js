/**
 * 1. 아이디어
 * 2중 for => 값 1 && 방문x => bfs
 * BFS 돌면서 그림 개수 +1 , 최대값을 갱신
 *
 * 2. 시간복잡도
 * BFS: O(V+E)
 * V : m x n
 * E : v x 4
 *
 * V+E = V + 4V = 5V = 5mn = 5 x 500 x 500 = 1,250,000 (~백만) < 2억 [가능!]
 *
 * 3. 자료구조
 * 그래프 전체 지도 : int[][]
 * 방문 : boolean[][]
 * Queue(BFS)
 */

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const map = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const [n, m] = map.shift();
const visited = Array.from(Array(n), () => Array(m).fill(false));
let cnt = 0;
let max = 0;

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

function bfs(x, y) {
  let rs = 1; // 그림 넓이를 카운트할 변수. 초기값 1로 시작
  const queue = [[x, y]];
  while (queue.length !== 0) {
    const [ex, ey] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let ny = ey + dy[i];
      let nx = ex + dx[i];
      if (ny >= 0 && ny < m && nx >= 0 && nx < n) {
        if (map[nx][ny] && !visited[nx][ny]) {
          rs++;
          visited[nx][ny] = true;
          queue.push([nx, ny]); // Corrected line
        }
      }
    }
  }
  return rs;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      visited[i][j] = true;
      cnt++;
      max = Math.max(max, bfs(i, j));
    }
  }
}

console.log(cnt);
console.log(max);
