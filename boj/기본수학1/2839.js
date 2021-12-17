let input = require("fs").readFileSync("boj/test.txt").toString();

// 일단 5를 빼보고, 안되면 물렀다가 3을 빼보아야함...

// -1이 나오는 것들
// 1 2 4 5 7

let input = require("fs").readFileSync("/dev/stdin").toString();

result = +input;

function checkBags(input) {
  if (input % 5 === 0) {
    return input / 5;
  } else {
    let iteration = input;
    let count = 0;
    for (let numberOfThree = 1; iteration % 5 !== 0; numberOfThree++) {
      iteration = iteration - 3;
      count = numberOfThree;
      if (iteration === 1 || iteration === 2) {
        return -1;
      }
    }
    return iteration / 5 + count;
  }
}

console.log(checkBags(result));
