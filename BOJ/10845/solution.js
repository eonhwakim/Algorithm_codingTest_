const fs = require('fs');
let [n, ...input] = fs.readFileSync('./input.txt').toString().trim().split('\n');
let temp = [];
let ans = '';
for(command of input){
  let cmd = command.split(' ')[0];
  let cmdCount = command.split(' ')[1];

  if(cmd === 'push'){
    temp.push(Number(cmdCount))
  }else if(cmd === 'front'){
    ans += (temp[0] ? temp[0]+'\n' : -1+'\n');
  }else if(cmd === 'back'){
    ans +=(temp.length !== 0 ? temp[temp.length-1]+'\n' : -1+'\n');
  }else if(cmd === 'size'){
    ans +=(temp.length+'\n')
  }else if(cmd === 'empty'){
    ans +=(temp.length === 0 ? 1+'\n' : 0+'\n')
  }else if(cmd === 'pop'){
    ans +=(temp.length !== 0? temp.shift()+'\n' : -1+'\n');
  }else return
}
console.log(ans.trim());
