const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

// 모두 같은 문자로 만들기 위한 최소 횟수
// 연속된 숫자 중에서 0과 1의 개수를 세서 둘 중 작은 수를 출력

const one = input.split('0').filter((num) => num !== ''); // 0을 기준으로 나누기
const zero = input.split('1').filter((num) => num !== ''); // 1을 기준으로 나누기

console.log(Math.min(one.length, zero.length)); // 0과 1의 개수 중 작은 수 출력
