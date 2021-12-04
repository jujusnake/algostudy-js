let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const subject = input[0] * input[1] * input[2];
const arr = subject.toString().split("");

let i = 0;
let apartment = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

while (i < arr.length) {
  switch (arr[i]) {
    case "0":
      apartment[0]++;
      break;
    case "1":
      apartment[1]++;
      break;
    case "2":
      apartment[2]++;
      break;
    case "3":
      apartment[3]++;
      break;
    case "4":
      apartment[4]++;
      break;
    case "5":
      apartment[5]++;
      break;
    case "6":
      apartment[6]++;
      break;
    case "7":
      apartment[7]++;
      break;
    case "8":
      apartment[8]++;
      break;
    case "9":
      apartment[9]++;
      break;
  }

  i++;
}

for (let j = 0; j < 10; j++) {
  console.log(apartment[j]);
}
