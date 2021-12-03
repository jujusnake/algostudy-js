// Input 받아오기 (줄바꿈 있는 버젼)
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => +x);

let dividend = input[0]; // 첫 번째 수
let divisor = input[1] // 두 번째 수 + 문자열로 만들기 + 한 숫자씩 나누기 + 다시 숫자로 만들기
  .toString()
  .split("")
  .map((x) => +x);

console.log(input[0] * divisor[2]);
console.log(input[0] * divisor[1]);
console.log(input[0] * divisor[0]);
console.log(input[0] * input[1]);
