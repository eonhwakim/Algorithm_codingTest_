const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, input] = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(n);
let numbers = input.split(' ').map(Number);
numbers.sort((a, b) => a - b); //오름차순 정렬

let sum = 0;
let total = 0;

//누적합 구하기
for (let i = 0; i < N; i++) {
  sum += numbers[i];
  total += sum;
}
console.log(total);
