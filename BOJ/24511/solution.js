const fs = require('fs');
const [n, A, B, M, C] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((i) => i.split(' ').map(Number));
let N = Number(n);

let queue = [];

for (let i = 0; i < N; i++) {
  if (A[i] === 0) queue.push(B[i]); //[1,4]
}

queue.sort((a, b) => b - a); //reverse

const result = [];

for (let j of C) {
  queue.push(j);
  result.push(queue.shift());
}
console.log(result.join(' ').toString());
