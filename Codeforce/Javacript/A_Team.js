var lines = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

lines.on("line", (line) => {
  inputLines.push(line);
});

lines.on("close", () => {
  solve();
});

function totalArr(arr) {
  let a = 0;
  for (let j = 0; j < arr.length; j++) {
    a += arr[j];
  }
  return a;
}

function solve() {
  let num = parseInt(inputLines[0]);

  let knew = [];

  for (let i = 1; i <= num; i++) {
    knew.push(inputLines[i].split(" ").map(Number));
  }

  let answered = 0;

  for (let i = 0; i < num; i++) {
    if (totalArr(knew[i]) >= 2) {
      answered++;
    }
  }

  console.log(answered);
}
