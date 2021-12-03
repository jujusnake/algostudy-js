let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

// let fs = require("fs");
// let input = fs.readFileSync("boj/test.txt").toString();

let ans = "";

for (let i = 1; i <= input; i++) {
  ans += i + "\n";
}

console.log(ans);
