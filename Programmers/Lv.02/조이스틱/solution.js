function solution(name) {
  let answer = 0;
  const length = name.length;

  let index; // 다음 값들을 확인할 때 사용
  let moveCount = length - 1; // 좌우 움직임 수를 체크

  for(let i = 0; i < name.length; i++){
      answer += Math.min(name.charCodeAt(i) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - name.charCodeAt(i) + 1);
      index = i + 1; // 다음 값들을 확인할 때 무조건 커서 움직여야 하기 때문에 
      // 연속되는 A 갯수 확인
      while(index < length && name.charAt(index) === 'A'){
          index++;   
      }
      // 순서대로 가는 것과, 뒤로 돌아가는 것 중 이동수가 적은 것을 선택
      moveCount = Math.min(moveCount, i * 2 + length - index); 
      // 2022년 이전 테스트 케이스만 확인하면 여기까지해도 정답처리가 되기 때문에, 이전 정답들에는 여기까지만 정리되어 있지만,
      // BBBBAAAAAAAB 와 같이, 처음부터 뒷부분을 먼저 입력하는 것이 더 빠른 경우까지 고려하려면 아래의 코드가 필요합니다.
      moveCount = Math.min(moveCount, (length - index) * 2 + i);
  }
  return answer + moveCount; //6+4
}

// 테스트
console.log(solution("JEROEN")); // 56
console.log(solution("JAN")); // 23
console.log(solution("BCAABD")); // 11
console.log(solution("BBBBAAAAAAAB")); //10

