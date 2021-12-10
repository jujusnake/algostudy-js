let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim();

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();

// 1
// 2 ~ 7 -> 6개 n = 1
// 8 ~ 19 -> 12개 n = 3
// 20 ~ 37 -> 18개 n = 6
// 38 ~ 61 -> 24개 n = 12
// 62 ~ 91 -> 30개 n = 17

// breakpoint = (1, 7, 19, 37, 61, 91 ...)
// 0, 1, 3, 6, 10, 15 -> 패턴 찾기

input = +input;

const checkRooms = (target) => {
  // 오른쪽 breakpoint
  const currBreakpoint = (n) => {
    return 1 + ((n * (n + 1)) / 2) * 6;
  };

  // 왼쪽 breakpoint
  const prevBreakpoint = (n) => {
    return 1 + ((n * (n - 1)) / 2) * 6;
  };

  // target = 1일 경우 예외처리
  if (target === 1) {
    return 1;
  } else {
    let n = 0;
    while (n < 18258) {
      // n = 18258 가 마지막으로 나올 수 있는 breakpoint를 만드는 수
      if (target <= currBreakpoint(n) && target > prevBreakpoint(n)) {
        // 사이에 껴있다면
        return n + 1; // 룸은 +1 해줘야함 (스타팅 포인트까지 포함하여 세므로)
      }
      n++;
    }
  }
};

console.log(checkRooms(input));
