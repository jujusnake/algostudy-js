// n자리 숫자가 만들 수 있는 최댓값 = 1, 2, 4, 6, 9, 12, 16, 20, 25, 30, 36, 42, ...
// 홀수 일 때 = Math.pow((n+1)/2, 2)
// 짝수 일 때 = Math.pow(n / 2, 2) + n/2

// // 1 자리 숫자가 만들 수 있는 최댓값 = 1
// 1
// 1

// // 2 자리 숫자가 만들 수 있는 최댓값 = 2
// 2
// 1 1

// // 3 자리 숫자가 만들 수 있는 최댓값 = 4
// 3
// 1 1 1

// 4
// 1 2 1

// // 4 자리 숫자가 만들 수 있는 최댓값 = 6
// 5
// 1 2 1 1

// 6
// 1 2 2 1

// // 5 자리 숫자가 만들 수 있는 최댓값 = 9
// 7
// 1 2 2 1 1

// 8
// 1 2 2 2 1

// 9
// 1 2 3 2 1

// // 6 자리 숫자가 만들 수 있는 최댓값 = 12
// 10
// 1 2 3 2 1 1

// 12
// 1 2 3 3 2 1

// // 7 자리 숫자가 만들 수 있는 최댓값 = 16
// 1 2 3 4 3 2 1

// 8 자리 숫자가 만들 수 있는 최댓값 = 20
// 1 2 3 4 4 3 2 1

let input = require("fs")
  .readFileSync("boj/test.txt")
  .toString()
  .trim()
  .split("\n");

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const timesOfOperation = (str) => {
  const distance = str.split(" ").reduce((a, b) => b - a);

  if (distance === 1) {
    return 1;
  } else if (distance === 2) {
    return 2;
  }

  for (let i = 3; i < 2147483648; i++) {
    if (i % 2 === 1) {
      let currMax = Math.pow((i + 1) / 2, 2);
      let prevMax = Math.pow((i - 1) / 2, 2);
      if (distance <= currMax && distance > prevMax) {
        return i;
      }
    } else {
      let prevMax = Math.pow(i / 2, 2);
      let currMax = Math.pow(i / 2, 2) + i / 2;
      if (distance <= currMax && distance > prevMax) {
        return i;
      }
    }
  }
};

console.log(input.map(timesOfOperation).reduce((a, b) => a + "\n" + b));
