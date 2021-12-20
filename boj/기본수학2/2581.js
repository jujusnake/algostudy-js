let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const n = input[0];
const m = input[1];

const nToM = (n, m) => {
  let arr = [];
  for (let i = n; i <= m; i++) {
    arr.push(i);
  }
  return arr;
};

let nums = Array.from(nToM(n, m));

const checkPrimeNum = (num) => {
  if (num === 1) {
    return 0;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return 0;
    }
  }
  return num;
};

const countPrimeNum = nums.map(checkPrimeNum).reduce((a, b) => a + b);
const smallestPrimeNum = nums.map(checkPrimeNum).filter((x) => x !== 0)[0];

if (smallestPrimeNum === undefined) {
  console.log(-1);
} else {
  console.log(countPrimeNum + "\n" + smallestPrimeNum);
}
