let fs = require("fs");
let input = fs.readFileSync("boj/test.txt").toString().trim();

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let makeCroatian = (str) => {
  let replaced = str
    .replace(/c=/g, "č")
    .replace(/c-/g, "ć")
    .replace(/dz=/g, "ż")
    .replace(/d-/g, "đ")
    .replace(/lj/g, "ł")
    .replace(/nj/g, "ñ")
    .replace(/s=/g, "š")
    .replace(/z=/g, "ž");
  return replaced;
};

let replaced = makeCroatian(input);
console.log(replaced.length);
