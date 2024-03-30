function solution(s) {
  //s 공백으로 구분 -> 공백으로 잘라서 Str->Num 으로 변환해서 비교 최소 최대 구분
  s = s.split(' ');
  var answer = Math.min(...s) + ' ' + Math.max(...s); //🔥 min,max 가 문자열도 취급하는구나!
  return answer;
}

//test
const s = '-4 -1';
const ans = solution(s);
console.log('Here!🌈', ans);
