let input = require("fs")
  .readFileSync("boj/test.txt")
  .toString()
  .trim()
  .split("\n");

// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

input.shift();

const findRoomNumber = (str) => {
  const arr = str.split(" ");
  const h = arr[0];
  const w = arr[1];
  const n = arr[2];

  let floor = h;
  if (n % h !== 0) {
    floor = n % h;
  }

  let row = Math.ceil(n / h);

  return floor + ("0" + row).slice(-2);
};

console.log(input.map(findRoomNumber).reduce((a, b) => a + "\n" + b));
