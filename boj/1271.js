let input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("boj/test.txt")
  .toString()
  .trim()
  .split(" ");

const num1 = BigInt(input[0]);
const num2 = BigInt(input[1]);

console.log((num1 / num2).toString());
console.log((num1 % num2).toString());
