function solution(name, yearning, photo) {
  // key-value 매칭
  let matching = {};
  for (let i = 0; i < name.length; i++) {
    matching[name[i]] = yearning[i];
  }
  //{ may: 5, kein: 10, kain: 1, radi: 3 }

  let ans = photo.map((el) => el.reduce((acc, cur) => acc + (matching[cur] || 0), 0)); //매칭된 숫자 없으면 0으로 계산
  return ans;
}

let nameData = ['may', 'kein', 'kain', 'radi'];
let yearning = [5, 10, 1, 3];
let photo = [
  ['may', 'kein', 'kain', 'radi'],
  ['may', 'kein', 'brin', 'deny'],
  ['kon', 'kain', 'may', 'coni'],
];

console.log(solution(nameData, yearning, photo)); // return  [19, 15, 6]
