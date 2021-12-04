let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let points = input[1].split(" ");

let m = Math.max(...points);

for (let i = 0; i < points.length; i++) {
  points[i] = (points[i] / m) * 100;
}

const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(points.reduce(reducer) / input[0]);
