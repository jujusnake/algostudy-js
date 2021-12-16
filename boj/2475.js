let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((x) => +x)
  .map((x) => x ** 2)
  .reduce((a, b) => a + b);

console.log(input % 10);
