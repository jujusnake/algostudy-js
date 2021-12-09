let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim();

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const lastNumber = (num) => {
  let card = [];
  for (let i = num; i > 0; i--) {
    card.push(i);
  }

  while (card.length !== 1) {
    card.pop();
    if (card.length === 1) {
      break;
    } else {
      let unshiftNum = card.pop();
      card.unshift(unshiftNum);
    }
  }
  return card[0];
};

console.log(lastNumber(input));
