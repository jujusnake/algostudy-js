let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim().split("\n");

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input[1].split(" ").sort((a, b) => a - b);

console.log(arr[0] + " " + arr[input[0] - 1]);
