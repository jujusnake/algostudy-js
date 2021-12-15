let input = require("fs")
  .readFileSync("boj/test.txt")
  .toString()
  .trim()
  .split("\n");

// input 받기
// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const arrA = input[1]
  .split(" ")
  .sort((a, b) => a - b)
  .map((x) => +x);
const arrM = input[3].split(" ").map((x) => +x);

function checkMemberOfArrayA(num) {
  let low = 0;
  let high = arrA.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arrA[mid];

    if (guess === num) {
      return 1;
      break;
    } else if (guess > num) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return 0;
}

let result = arrM.map((x) => checkMemberOfArrayA(x)).join("\n");
console.log(result);
