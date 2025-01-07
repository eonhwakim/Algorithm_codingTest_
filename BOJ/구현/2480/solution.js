const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = fs.readFileSync(filePath).toString().trim();
let [one, two, three] = input.split(' ').map(Number);

if (one === two && two === three) {
  // 3개의 수가 같은 경우
  console.log(10000 + one * 1000);
} else if (one === two || one === three) {
  console.log(1000 + one * 100);
} else if (two === three) {
  console.log(1000 + two * 100);
} else {
  // 3개의 수가 모두 다른 경우
  let max = Math.max(one, two, three);
  console.log(max * 100);
}
