const fs = require('fs');
const [[n, m], ...arr] = fs.readFileSync('./input.txt').toString().trim().split('\n').map(el => el.split(' ').map(el => +el));

// console.log(n) // 2
// console.log(m) // 3

// n행 까지 2차원 배열
// console.log(arr.slice(0, n))

// k행부터 끝까지 2차원 배열
// console.log(arr.slice(n + 1))
kArray = arr.slice(n + 1)
const ans = [];

for(let [i, j, x, y] of kArray) {
  // console.log('🍀', i, j, x, y);
  let sum = 0;

  for(a=i; a<=x; a++){
    for(b=j; b<=y; b++){
      sum +=arr[a-1][b-1]
    }
  }
  ans.push(sum);

}
console.log(ans.join("\n"));
