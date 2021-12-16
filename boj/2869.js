let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim().split(" ");

// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const a = input[0];
const b = input[1];
const v = input[2];

// a * (n + 1) - b * n === v
// an + a - bn === v
// (a-b)n === v - a
// n >= (v-a)/(a-b)

console.log(Math.ceil((v - a) / (a - b) + 1));
