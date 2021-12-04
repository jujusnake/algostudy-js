// let fs = require("fs");
// let input = fs.readFileSync("boj/test.txt").toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let fin = "";

let i = 0;

while (i < input.length) {
  arr = input[i].split(" ");

  if (parseInt(arr[0]) + parseInt(arr[1]) != 0) {
    fin += parseInt(arr[0]) + parseInt(arr[1]) + "\n";
  }
  i++;
}

console.log(fin);
