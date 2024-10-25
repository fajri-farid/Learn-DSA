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
  let [a, b] = inputLines[0].split(" ").map(Number);

  sizeBoard = a * b;

  console.log(Math.floor(sizeBoard / 2));
}
