let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim().split(" ");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let compareArr = input.map((x) => x.split("").reverse().join(""));
console.log(Math.max(...compareArr));
