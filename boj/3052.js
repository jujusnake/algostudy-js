let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const subject = input.map((x) => x % 42);
let i = 0;

let unique = [];

while (i < subject.length) {
  if (unique.indexOf(subject[i]) === -1) {
    unique.push(subject[i]);
  }
  i++;
}

console.log(unique.length);
