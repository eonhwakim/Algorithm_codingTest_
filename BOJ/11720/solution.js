const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");


const sum = input[1].split('').reduce((acc, cur) => acc + parseInt(cur), 0);
console.log(sum);