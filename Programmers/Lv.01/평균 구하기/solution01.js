function solution(arr) {
  var answer = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  answer = sum / arr.length;
  return answer;
}

// test
// const test1 = [1, 2, 3, 4];
// const answer = solution(test1);
// console.log('Here!🌈', answer);
