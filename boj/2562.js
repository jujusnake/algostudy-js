let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let big = Math.max(...input);
let index = input.indexOf(big.toString());

console.log(big);
console.log(index + 1);
