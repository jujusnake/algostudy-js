let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(/ |\n/) // 정규표현식 -> // 사이에 있는 공백 |=or \n=엔터
  .map((x) => +x);

// let input = require("fs")
//   .readFileSync("boj/test.txt")
//   .toString()
//   .split(/ |\n/)
//   .map((x) => +x);

for (let i = 1; i <= input[0]; i++) {
  console.log(input[i * 2 - 1] + input[i * 2]);
}
