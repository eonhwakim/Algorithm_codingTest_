const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

// 길이가 짧은 순서대로, 길이가 같다면 사전 순으로 정렬
input.sort((a, b) => {
  if (a.length === b.length) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  return a.length - b.length;
});

for (let i = 0; i < n; i++) {
  if (input[i] === input[i + 1]) {
    continue;
  }
  console.log(input[i]);
}
