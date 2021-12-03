let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

input = Number(input);

let i = 0;
while (i < input) {
  sum = i;
  let iStr = i.toString();

  for (let j = 0; j < iStr.length; j++) {
    sum = sum + +iStr[j];
  }

  if (sum === input) {
    console.log(+i);
    break;
  } else if (i === input - 1) {
    console.log(0);
  }
  i++;
}

// 와씨바!!!!!
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin")
// 이렇게 하면 필시 틀렸습니다 나오니까 조심해라 시발 다 푼건데 이거떄문에 존나 자괴감 왔잖아 시발 ㅠㅠ
