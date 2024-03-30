function solution(num) {
  return num % 2 ? 'Odd' : 'Even';
  // 1 은 true
  // 0 은 false
}

//test
const test = 4;
const answer = solution(test);
console.log('Here!🌈', answer);
