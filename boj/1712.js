let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim().split(" ");

// a + (b * x) < (c * x);
// a < (c-b)x;
// x > a/(c-b);
// 그러니까 x는 a/(c-b) 보다 하나 더 큰 정수면 됨!

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

input = input.map((x) => +x);

const a = input[0];
const b = input[1];
const c = input[2];

const getTarget = (a, b, c) => {
  if (b >= c) {
    return -1; // 손익분기점이 나올 수 없는 조건 : 판매가격이 생산가격보다 적거나 같을 때
  } else {
    return Math.floor(a / (c - b) + 1); // 정수로 만들어주기
  }
};

console.log(getTarget(a, b, c));
