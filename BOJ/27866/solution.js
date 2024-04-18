const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [input, n] = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = input[n-1]
console.log(answer);