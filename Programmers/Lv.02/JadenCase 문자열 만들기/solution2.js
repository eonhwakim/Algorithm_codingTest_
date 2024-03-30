function solution(s) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === ' ') {
      //첫 글자 이거나 이전 글자가 공백인지 확인
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }

  return answer;
}

//test
const s = '3people unFollowed me';
const ans = solution(s);
console.log('Here!🌈', ans);
