.readFileSync("boj/test.txt")
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const items = input.shift();

const checkEquals = (arr) => {
  let result = "";

  for (let i = 0; i < arr[0].length; i++) {
    let check = [];
    for (let j = 0; j < items; j++) {
      check.push(arr[j][i]);
      // console.log(check);
    }
    let unique = check.filter((e, i) => check.indexOf(e) === i);
    // console.log(unique);
    if (unique.length === 1) {
      result += unique[0];
    } else {
      result += "?";
    }
  }

  return result;
};

console.log(checkEquals(input));
