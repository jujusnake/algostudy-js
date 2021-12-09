let fs = require("fs");
let input = fs
  .readFileSync("boj/test.txt")
  .toString()
  .trim()
  .toLowerCase()
  .split("");

let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toLowerCase()
  .split("");

const findNumber = (str) => {
  let numberForAlpha = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  for (let n in numberForAlpha) {
    if (numberForAlpha[n].indexOf(str) !== -1) {
      return n;
    }
  }
};

const addTime = (arr) => {
  let result = 0;
  for (let e of arr) {
    result += +findNumber(e) + 1;
  }
  return result;
};

console.log(addTime(input));
