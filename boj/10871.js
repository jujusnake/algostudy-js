let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let first = input[0].split(" ");
let a = input[1].split(" ");

let n = parseInt(first[0]);
let x = parseInt(first[1]);

let result = "";

for (let i = 0; i <= n; i++) {
  if (a[i] < x) {
    result += a[i] + " ";
  }
}

console.log(result);
