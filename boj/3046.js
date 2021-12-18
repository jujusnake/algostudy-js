.readFileSync("boj/test.txt")
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const r1 = input[0];
const s = input[1];
const r2 = 2 * s - r1;

console.log(r2);
