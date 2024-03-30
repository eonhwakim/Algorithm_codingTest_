function solution(progresses, speeds) {
  var answer = [0]; //stack 넣을 공간

  // 각각의 기능이 배포되는데 걸리는 시간을 구한다.
  const releaseDays = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  // console.log('🍀', releaseDays); //[ 7, 3, 9 ]
  
  let max = releaseDays[0];

  for(let i = 0; i < releaseDays.length; i++) {
    if(releaseDays[i] <= max){
      answer[answer.length - 1] += 1;
    }else{
      max = releaseDays[i];
      answer.push(1);
    }
  }
  console.log('🍀', answer);
  return answer; 
}

solution([93, 30, 55], [1, 30, 5])