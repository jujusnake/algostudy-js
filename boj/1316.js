let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift(); // 맨처음 숫자 빼기

let result = 0; // 결과 콘솔로그 찍을 변수

// input 배열에 대한 for문 돌리기
for (let n of input) {
  // 바로 붙어있는 중복값을 제거하는 함수
  // for문을 돌려 만약 다음 인덱스의 문자와 같다면 이전 것을 null로 만듦
  const eraseDuplicates = (str) => {
    let arr = str.split("");
    for (let n = 0; n < arr.length; n++) {
      if (arr[n] === arr[n + 1]) {
        arr[n] = null;
      } else if (arr[n + 1] === undefined) {
        // arr[n+1] === undefined -> 마지막 문자라는 뜻 -> break
        break;
      } else {
      }
    }
    let result = arr.filter((e) => e != null); // 배열의 null
    return result.join(""); // 다시 스트링으로 만듦
  };

  const checkGroup = (str) => {
    let arr = str.split("");
    let set = [...new Set(arr)]; // set = unique value만 뽑아냄 -> [...] = 배열로 만듦

    if (arr.join() !== set.join()) {
      // 두가지가 같으면 true
      return false;
    } else {
      return true;
    }
  };

  // input값 검사
  if (checkGroup(eraseDuplicates(n)) === true) {
    result++;
  } else {
    result;
  }
}

console.log(result);
