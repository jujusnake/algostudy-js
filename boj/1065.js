// let fs = require("fs");
// let input = fs.readFileSync("boj/test.txt").toString();

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let i = 1;
let resultArr = [];

while (i <= input) {
  let str = i.toString();

  if (i < 10) {
    resultArr.push(i);
  } else if (i < 100) {
    resultArr.push(i);
  } else {
    if (str[2] - str[1] === str[1] - str[0]) {
      resultArr.push(i);
    }
  }

  i++;
}

console.log(resultArr.length);
