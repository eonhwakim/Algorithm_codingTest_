function solution(park, routes) {
  // 방향 설정
  const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  // 시작점 설정
  let start = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes('S')) {
      start = [i, park[i].indexOf('S')];
      break;
    }
  }

  for (let r of routes) {
    let [dir, cnt] = r.split(' ');

    let [tempX, tempY] = start; // 현재 위치
    let step = 0;
    // r 이동하기 E 2-> 'x' 나오면 pass 하고 다음 루트로 이동
    while (step < parseInt(cnt)) {
      tempX += directions[dir][0];
      tempY += directions[dir][1];

      // 범위를 벗어나거나 'X' 이면 pass
      if (tempX < 0 || tempX >= park.length || tempY < 0 || tempY >= park[0].length || park[tempX][tempY] === 'X')
        break;
      // 이동한 위치가 'O' 이면 step 증가
      step++;
    }
    if (step === parseInt(cnt)) start = [tempX, tempY];
  }
  return start;
}

let parkData = ['SOO', 'OOO', 'OOO'];
let routesData = ['E 2', 'S 2', 'W 1'];
console.log(solution(parkData, routesData)); //return [2,1]
