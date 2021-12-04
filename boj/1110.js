// let fs = require("fs");
// let input = fs.readFileSync("boj/test.txt").toString();

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

function nextNumber(input) {
  let first = Math.floor(input / 10);
  let second = input % 10;

  let sum = first + second;
  let sumSecond = sum % 10;

  let next = Number(second.toString() + sumSecond.toString());

  return next;
}

let loopNum = nextNumber(input);
let cycle = 1;

while (loopNum != input) {
  loopNum = nextNumber(loopNum);
  cycle++;
}

console.log(cycle);
