const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((i) => i.split(' '));

const queue = [];
let result = '';
for (let i = 0; i < n; i++) {
  switch (input[i][0]) {
    case 'push':
      queue.push(input[i][1]);
      break;
    case 'pop':
      result += queue.length ? queue.shift() + '\n' : -1 + '\n';
      break;
    case 'size':
      result += queue.length + '\n';
      break;
    case 'empty':
      result += queue.length ? 0 + '\n' : 1 + '\n';
      break;
    case 'front':
      result += queue.length ? queue[0] + '\n' : -1 + '\n';
      break;
    case 'back':
      result += queue.length ? queue[queue.length - 1] + '\n' : -1 + '\n';
      break;
  }
}
console.log(result);
