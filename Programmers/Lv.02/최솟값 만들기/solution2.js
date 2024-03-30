function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

//test
const A = [1, 2]; //[1, 4, 2];
const B = [3, 4]; //[5, 4, 4];
const test = solution(A, B);
console.log('Here!🌈', test);

/** arr.reduce(callback[, initialValue])
 * callback 요소
 * - accumulator 누산기
 * - currentValue 처리할 현재 요소
 * - currentValue(Optional) 처리할 현재 요소의 인덱스
 * - array(Optional) reduce()를 호출한 배열
 */
