let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const nums = input
  .pop()
  .split(" ")
  .map((x) => +x);

// 약수분해로 구하는 방법
// 판별할 숫자의 root값까지 나누어보면 해당 수가 소수인지 알 수 있음
// 80 -> 1 2 4 5 8 | 10 16 20 40 80
const checkPrimeNum = (num) => {
  // 1은 소수가 아님!
  if (num === 1) {
    return 0;
  }
  // 루트를 표현하기 힘드니 i*i <= num으로 표현!
  for (let i = 2; i * i <= num; i++) {
    // 약수의 중심까지 모든 수를 넣었더니 나머지가 0인 것이 있다면 -> 리턴 0
    if (num % i === 0) {
      return 0;
    }
  }
  // 약수의 중심까지 모든 수를 넣었더니 나머지가 0인게 없다면 -> 소수이므로 리턴 1
  return 1;
};

console.log(nums.map(checkPrimeNum).reduce((a, b) => a + b));
