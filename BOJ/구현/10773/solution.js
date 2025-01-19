const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const stack = new Array();
for (let i = 0; i < n; i++) {
  if (input[i] === 0) {
    stack.pop();
  } else {
    stack.push(input[i]);
  }
}

let answer = stack.reduce((acc, cur) => acc + cur, 0);
console.log(answer);
