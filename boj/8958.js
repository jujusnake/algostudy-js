const { count } = require("console");
let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let countPoints = (str) => {
  let points = 0;
  let tmp = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "O" && i != str.length - 1) {
      tmp++;
    } else if (str[i] === "O" && i === str.length - 1) {
      tmp++;
      points += (tmp * (tmp + 1)) / 2;
    } else {
      points += (tmp * (tmp + 1)) / 2;
      tmp = 0;
    }
  }
  return points;
};

for (let i = 1; i < input.length; i++) {
  console.log(countPoints(input[i]));
}
