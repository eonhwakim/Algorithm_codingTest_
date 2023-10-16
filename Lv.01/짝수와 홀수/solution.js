function solution(num) {
  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

//test
const test = 3;
const answer = solution(test);
console.log('Here!🌈', answer);
