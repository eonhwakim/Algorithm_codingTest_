/**
 * 브론즈 3
 *
 * 출력 :
 * 85 //최댓값
 * 8  //몇번째 수인지
 */

const fs = require('fs');
const input = fs
  .readFileSync('linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');
let inputNums = input.map((i) => Number(i));

const maxNum = Math.max(...inputNums);
const index = inputNums.indexOf(maxNum) + 1;
console.log(`${maxNum}\n${index}`);
