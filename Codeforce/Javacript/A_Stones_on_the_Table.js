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

  let move = 0;

  for (i = 0; i < a - 1; i++) {
    if (b[i] === b[i + 1]) {
      move++;
    }
  }

  console.log(move);
}
