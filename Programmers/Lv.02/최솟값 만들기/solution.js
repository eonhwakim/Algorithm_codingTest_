function solution(A, B) {
  let ans = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  //  누적 합
  for (let i = 0; i < A.length; i++) {
    ans += A[i] * B[i];
  }
  return ans;
}

//test
const A = [1, 2]; //[1, 4, 2];
const B = [3, 4]; //[5, 4, 4];
const test = solution(A, B);
console.log('Here!🌈', test);
