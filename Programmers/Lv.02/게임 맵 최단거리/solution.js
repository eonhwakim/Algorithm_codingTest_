function solution(maps) {
  let answer = 1;
  let visited = maps //탐색을 마친 노드들
  let needVisit = []; //탐색해야할 노드들
  const n = maps.length; //세로
  const m = maps[0].length; //가로

  //4방향  
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];

  needVisit.push([0, 0]); //시작점
  visited[0][0] = 0; //방문한 곳은 0으로

  
  while(needVisit.length !== 0) {// 탐색해야할 노드가 남아있다면
    let size = needVisit.length;
    
    for(let i = 0; i < size; i++) {
        let [x, y] = needVisit.shift(); // 가장 오래 남아있던 정점을 뽑아냄.
        
        for(let j = 0; j < 4; j++) {
            let nx = x + dx[j];
            let ny = y + dy[j];
            
            if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
                if(nx == n - 1 && ny == m - 1) {
                    return ++answer;
                }
                needVisit.push([nx, ny]);
                visited[nx][ny] = 0;
            }
        }
    }
    answer++;
}

return -1;
}




const testCases = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	//answer: 11
console.log(solution(testCases));