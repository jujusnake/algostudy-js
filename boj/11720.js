let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const addDigits = (str) => {
  let result = 0;

  for (let i = 0; i < input[0]; i++) {
    result += +str[i];
  }

  return result;
};

console.log(addDigits(input[1]));
