/**
 * 아이디어
 * - 모든점 -> 모든점 :  플로이드 와샬
 * - 비용배열 INF로 초기화
 * - 간선의 비용 대입
 * - 거쳐서 비용 줄어들 경우, 갱신(for문 3중첩)
 * 
 * 변수 
 * - 비용 배열 : int[][] 
 */


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, ...arr] = input;

const INF = Number.MAX_SAFE_INTEGER;

const rs = Array.from(Array(parseInt(n) + 1), () => Array(parseInt(n) + 1).fill(INF));

for (let i = 1; i <= parseInt(n); i++) {
  rs[i][i] = 0;
}

for (let i = 0; i < parseInt(m); i++) {
  const [a, b, c] = arr[i].split(' ').map(Number);
  rs[a][b] = Math.min(rs[a][b], c);
}

for (let k = 1; k <= parseInt(n); k++) {
  for (let j = 1; j <= parseInt(n); j++) {
    for (let i = 1; i <= parseInt(n); i++) {
      if (rs[j][i] > rs[j][k] + rs[k][i]) {
        rs[j][i] = rs[j][k] + rs[k][i];
      }
    }
  }
}

for (let j = 1; j <= parseInt(n); j++) {
    let result = '';
    for (let i = 1; i <= parseInt(n); i++) {
        if (rs[j][i] === INF) result += '0 ';  
        else result += rs[j][i] + ' ';
    }
    console.log(result.trim());
}
