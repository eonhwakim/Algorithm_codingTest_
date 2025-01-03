const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//배열에 단어를 각각 넣어준다.
const arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i]);
}
let count = arr.length;
//한단어를 체크하는 함수
//단어를 받아서 중복되는 문자가 있으면 그 단어를 배열에서 제거한다.
arr.forEach((word) => {
  let check = word[0];
  for (let i = 1; i < word.length; i++) {
    if (check.includes(word[i]) && word[i - 1] !== word[i]) {
      count--;
      break;
    }
    check += word[i];
  }
});

console.log(count);
