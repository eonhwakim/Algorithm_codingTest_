/** 1152 브론즈 2 단어의 개수
 *
 */

const fs = require('fs');
// const input = fs.readFileSync('./input.txt').toString().trim().split(' ');
// console.log(input.length);

//-> 틀림!! 반례: ' ' 공백일때 1을 카운팅 한다 -> 0으로 나와야 한다
const input = fs.readFileSync('./input.txt').toString().trim();
const arr = input.split(' ');

console.log(input === '' ? 0 : arr.length);
