const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split(' ');

const n = +input[0];
const k = +input[1];
let ans = [];

//n 길이의 1~n 배열 생성
let arr = Array.from({length: n}, (v, i) => i + 1);

for(let i=0; i<n; i++) { // 배열의 길이만큼 반복
  for(let j=1; j<=k; j++){ // 첫번째붙 3번째까지만 반복 
    if(j === k) { //3번째 빼서 temp에 넣기
      ans.push(arr.shift());
    }else{ //arr 배열 맨앞에 있는걸 맨뒤로 보내기
      arr.push(arr.shift());
    }
  }
}

// console.log('ans🍀', ans);
console.log('<'+ans.join(', ')+'>') //return <3, 6, 2, 7, 5, 1, 4>
