let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let input = fs
  .readFileSync("boj/test.txt")
  .toString()
  .trim()
  .toLowerCase()
  .split("")
  .sort();

let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .toLowerCase()
  .split("")
  .sort();

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const makeWordIntoArray = (input) => {
  let result = new Array(26).fill(0);

  for (let i = 0; i < input.length; i++) {
    let indexNumber = alphabet.indexOf(input[i]);
    result[indexNumber] += 1;
  }

  return result;
};

const findMax = (arr) => {
  let firstMax = Math.max(...arr);
  let cut = arr.indexOf(firstMax);
  let secondMax = Math.max(...arr.slice(cut + 1));

  if (firstMax === secondMax) {
    return "?";
  } else {
    return alphabet[cut].toUpperCase();
  }
};

console.log(findMax(makeWordIntoArray(input)));
