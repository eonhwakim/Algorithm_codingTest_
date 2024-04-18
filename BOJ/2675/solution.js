const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let result = '';  
for(let i=0 ; i< n; i++){
  let [repeat, str] = input[i].split(' ');
  
  for(let j=0; j<str.length; j++){
    result += str[j].repeat(repeat)
  }
  result += '\n';
}
console.log(result.trim());

