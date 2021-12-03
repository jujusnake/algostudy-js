let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let result = "";

for (let i = 1; i <= input[0]; i++) {
  arr = input[i].split(" ");
  result += "Case #" + i + ": " + (parseInt(arr[0]) + parseInt(arr[1])) + "\n";
}

console.log(result);
