function d(n) {
  let number = n;
  let result = 0;

  for (let i = 0; i < String(n).length; i++) {
    // number를 10으로 나눠가면서 각 자리수를 result에 합한다.
    result += number % 10;
    number = Math.floor(number / 10);
  }
  return n + result;
}

const range = 10000;
// 0~10000 까지 셀프넘버 배열 생성하고 true로 초기화
let selfNumbers = Array(range + 1).fill(true);

for (let i = 0; i <= range; i++) {
  // 셀프넘버가 아니면 false로 변환
  selfNumbers[d(i)] = false;
}

for (let i = 0; i < range; i++) {
  if (selfNumbers[i]) {
    console.log(i);
  }
}

// 이 문제의 알고리즘은 부르트포스 알고리즘을 활용한 것이다. 완전탐색 알고리즘으로 가능한 모든 경우의 수를 다 탐색하면서 요구조건에 충족되는 결과만을 가져오는 것이다.
