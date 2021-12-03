let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let ans = "";

for (let i = parseInt(input); i > 0; i--) {
  // parseInt 잊지마라!
  ans += i + "\n";
}

console.log(ans);
