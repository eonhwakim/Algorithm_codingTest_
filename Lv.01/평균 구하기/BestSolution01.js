function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
// test
const test1 = [1, 2, 3, 4];
const answer = solution(test1);
console.log('Here!🌈', answer);
