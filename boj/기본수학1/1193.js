// const { group } = require("console");
// let fs = require("fs");
// let input = fs.readFileSync("boj/test.txt").toString().trim();

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = +input;

// 1/1
// 1/2
// 2/1
// 3/1
// 2/2
// 1/3
// 1/4
// 2/3
// 3/2
// 4/1
// 5/1
// 4/2
// 3/3
// 2/4
// 1/5
// 1/6

// 열 (대각선) 을 그룹이라 생각하고 그룹 넘버를 구하기
// 그룹넘버 = 1/그룹넘버 | 그룹넘버/1 등의 스타팅 포인트를 알 수 있음
const checkGroup = (num) => {
  // 한 그룹의 맨 마지막 인덱스 넘버
  let breakpoint = (n) => {
    return (n * (n + 1)) / 2;
  };

  for (let i = 1; i <= 100000000; i++) {
    // 맨 마지막 인덱스 넘버와 맨 처음 인덱스넘버 사이에 있어야함
    if (num <= breakpoint(i) && num > breakpoint(i - 1)) {
      return i;
    }
  }
};

const checkInt = (num) => {
  // 첫번째 분수 예외처리
  if (num === 1) {
    return "1/1";
  }

  // 그룹의 처음 인덱스는 이전 breakpoint + 1
  let groupNum = checkGroup(num);
  let startIndex = (groupNum * (groupNum - 1)) / 2 + 1;

  // 그룹넘버가 짝수면 위에서 시작하고 (1/2꼴)
  if (groupNum % 2 === 0) {
    let add = num - startIndex;
    return 1 + add + "/" + (groupNum - add);
  } else {
    // 그룹넘버가 홀수면 왼쪽에서 시작하고 (2/1꼴)
    let add = num - startIndex;
    return groupNum - add + "/" + (1 + add);
  }
};

console.log(checkInt(input));
