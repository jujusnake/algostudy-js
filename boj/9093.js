let input = require("fs")
  .readFileSync("boj/test.txt")
  .toString()
  .trim()
  .split("\n");

// input 받기
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// input[0] 인 숫자값 제거
input.shift();

// console.log으로 답 찍을 변수 선언
let result = "";

// input의 각 요소들에 대해 해당 함수 돌림 (각 단어 반대로 만들고 결합 + result 변수에 추가)
input.forEach((e) => {
  let arr = e.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse().join("");
  }
  result += arr.join(" ") + "\n";
});

// 최종 답
console.log(result);

// const reverseWords = (sentence) => {
//   let arr = sentence.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].split("").reverse().join("");
//   }
//   result += arr.join(" ") + "\n";
// };

// input.forEach((x) => reverseWords(x));
