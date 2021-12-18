let input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("boj/test.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const m = parseInt(input[1]);

console.log(n + m);
