let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((x) => +x);

let h = input[0]; // 시
let m = input[1]; // 분

let earlym = m - 45; // 45분을 뺀 분

if (earlym >= 0) {
  console.log(h, earlym); // 시에는 변화가 없으니까
} else {
  m = 60 + earlym; // 60 + earlym (=음수)
  h -= 1; // 시 하나 앞으로 땡겨줘야

  if (h < 0) {
    console.log(23, m); // 0에서 -1되면 항상 23시로
  } else {
    console.log(h, m);
  }
}
