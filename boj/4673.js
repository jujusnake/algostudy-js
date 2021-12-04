let d = (n) => {
  let sum = n;
  let str = n.toString();
  let strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    sum += Number(str[i]);
  }
  return sum;
};

let constructor = (num) => {
  let i = 0;
  while (i < num) {
    sum = i;
    let iStr = i.toString();

    for (let j = 0; j < iStr.length; j++) {
      sum = sum + +iStr[j];
    }

    if (sum === num) {
      return "found";
      break;
    } else if (i === num - 1) {
      return "selfNum";
    }
    i++;
  }
};

let answer = "";

for (let i = 1; i <= 10000; i++) {
  if (constructor(i) === "selfNum") {
    answer += i + "\n";
  }
}

console.log(answer);
