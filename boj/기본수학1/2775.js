// 백준 2775 부녀회장이 될테야
// 사용언어 : node.js

let input = require("fs")
  .readFileSync("boj/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

/////

const pairs = input.shift();

let newInput = [];

// 두개씩 쌍으로 만들기!
for (let i = 0; i < pairs; i++) {
  newInput.push([input[2 * i], input[2 * i + 1]]);
}

// 함수 작성
const findMembers = (arr) => {
  let f = arr[0];
  let r = arr[1];

  let apartment = [];

  for (let i = 0; i <= f; i++) {
    apartment[i] = [];

    for (let j = 0; j <= r; j++) {
      if (i === 0) {
        apartment[i].push(j);
      } else {
        let sum = 0;
        for (let k = 0; k <= j; k++) {
          sum += apartment[i - 1][k];
        }
        apartment[i].push(sum);
      }
    }
  }

  // 최종 결과물은 배열 속 마지막 배열의 마지막 항목!
  return apartment[f][r];
};

console.log(newInput.map(findMembers).reduce((a, b) => a + "\n" + b));
