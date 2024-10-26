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
  let a = inputLines[0].split(" ").map(Number);

  let setA = new Set(a);
  setA = [...setA];

  x = a.length;
  y = setA.length;

  let result = x - y;

  console.log(result);
}
