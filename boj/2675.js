let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let multiply = (arr) => {
  let repeat = [];

  for (let i = 0; i < arr[1].length; i++) {
    repeat.push(arr[1][i].repeat(arr[0]));
  }

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  return repeat.reduce(reducer);
};

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  input[i] = input[i].split(" ");
  answer += multiply(input[i]) + "\n";
}

console.log(answer);
