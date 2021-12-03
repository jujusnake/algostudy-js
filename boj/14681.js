const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  ///// 여기서 부터 내 코드
  let a = input[0];
  let b = input[1];

  if (a > 0 && b > 0) {
    console.log(1);
  } else if (a < 0 && b > 0) {
    console.log(2);
  } else if (a < 0 && b < 0) {
    console.log(3);
  } else {
    console.log(4);
  }
  ////
  process.exit();
});

// 출처: https://hanch-dev.tistory.com/4#toc-1. node.js - 런타임 에러 (EACCES) 현상 [HanCh_Dev]
