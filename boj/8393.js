let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let result = 0;

for (let i = 1; i <= input; i++) {
  result = result + i;
}

console.log(result);
