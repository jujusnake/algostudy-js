let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString() //
  .split(" ") // 공백을 기준으로 나누기
  .map((x) => +x); // number로 만들어주기

const reducer = (val1, val2) => val1 + val2;
console.log(input.reduce(reducer));
