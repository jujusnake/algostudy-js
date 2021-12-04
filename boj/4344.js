let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let aboveAvg = (str) => {
  let arr = str.split(" ");

  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += +arr[i];
  }
  let avg = sum / arr[0];

  let above = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > avg) {
      above++;
    }
  }

  return ((above / arr[0]) * 100).toFixed(3);
};

let result = "";

for (let i = 1; i <= input[0]; i++) {
  result += aboveAvg(input[i]) + "%" + "\n";
}

console.log(result);
