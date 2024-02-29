// 파일 불러오기 -> fs모듈
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n'); //백준에서는 '/dev/stdin'을 사용하면 된다.

const cnt = Number(input[0])
const stack = []

for(let i=0; i<=cnt; i++){
  const num = Number(input[i])

  if(num === 0 && stack.length !== 0) {
    stack.pop();
  }else{
    stack.push(num)
  }
}
let answer = 0;
answer = stack.slice(1).reduce((acc, cur) => acc + cur, 0); //slice(1)로 인덱스1부터 끝까지 얕은 복사본 배열 생성
console.log(answer);
