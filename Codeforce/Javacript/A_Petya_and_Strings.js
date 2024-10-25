const { copyFileSync } = require("fs");

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

function solve() {
  let a = inputLines[0];
  let b = inputLines[1];

  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a === b) {
    console.log(0);
  } else if (a > b) {
    console.log(1);
  } else {
    console.log(-1);
  }
}
