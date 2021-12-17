let input = require("fs")
  .readFileSync("boj/test.txt")
  .toString()
  .trim()
  .split(" ");

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const numOne = BigInt(input[0]);
const numTwo = BigInt(input[1]);

console.log((numOne + numTwo).toString());
