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
  let n = parseInt(inputLines[0]);

  if (n >= 2) {
    console.log(25);
  } else {
    console.log(5);
  }
}
