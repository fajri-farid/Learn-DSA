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
  let a = parseInt(inputLines[0]);

  let fn = 0;

  if (a % 2 === 0) {
    fn = a / 2;
  } else {
    fn = -((a + 1) / 2);
  }

  console.log(fn);
}
