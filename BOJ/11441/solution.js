// 시간 초과! -> 중첩된 반복문 : 내부 반복문의 실행횟수가 배열의 크기에 비례
// const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().trim().split('\n'); //[ '5', '10 20 30 40 50', '5', '1 3', '2 4', '3 5', '1 5', '4 4' ]

// let n = Number(input[0]);
// let m =  Number(input[2]);
// let arr = input[1].split(" ").map((el) => +(el)); 
// // console.log('🍀',  (input[3]).split(' ').map(el => +el)[0]);
// let sumArr = [];
// for(let i=0; i < m; i++) {
//   let I = (input[i+3]).split(' ').map(el => +el)[0]
//   let J = (input[i+3]).split(' ').map(el => +el)[1]
//   let sum = 0;

//   for(let j=I; j<=J; j++){
//     sum += arr[j-1]
//   }
//   sumArr.push(sum);
  
// }
// console.log(sumArr.join('\n'));

//----------------------------------------------------------------
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(" ").map(el => +el);

let prefixSum = [];
prefixSum[0] = arr[0];

for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
}

const m = Number(input[2]);
let sumArr = [];
for (let i = 0; i < m; i++) {
    const [I, J] = input[i + 3].split(' ').map(el => +el);
    let sum = prefixSum[J - 1] - (prefixSum[I - 2] || 0); 
    sumArr.push(sum);
}

console.log(sumArr.join('\n'));
