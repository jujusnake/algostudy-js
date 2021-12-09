let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString();

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();

let findIndex = (str) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let result;

  for (let i = 0; i < 26; i++) {
    result += str.indexOf(alphabet[i]) + " ";
  }

  return result.slice(9);
};

console.log(findIndex(input));
