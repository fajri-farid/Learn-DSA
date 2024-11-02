const { totalmem } = require("os");

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
  let distinct = inputLines[0].split(" ").map(Number);
  distinct = distinct.sort((a, b) => a - b);

  //   console.log(distinct);

  let a, b, c;
  a = distinct[0];
  b = distinct[1];
  c = distinct[2];

  //   console.log(a, b, c);

  x1 = Math.abs(a - b);
  x2 = Math.abs(b - b);
  x3 = Math.abs(c - b);

  //   console.log(x1, x2, x3);

  total = x1 + x2 + x3;

  console.log(total);
}
