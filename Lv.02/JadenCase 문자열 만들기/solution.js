// 모든 문자열을 소문자로 변환 -> " "로 분리 -> 각 단어의 첫 문자가 알파벳 일 경우만 첫글자 대문자로 변경
function solution(s) {
  const words = s.toLowerCase().split(' '); // [ '3people', 'unfollowed', 'me' ]
  return words.map((item) => item.replace(/^[a-z]/, item.charAt(0).toUpperCase())).join(' ');
}

//test
const s = '3people unFollowed me';
const ans = solution(s);
console.log('Here!🌈', ans);
