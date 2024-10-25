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
  let num = parseInt(inputLines[0]);

  let input = [];

  for (let i = 1; i <= num; i++) {
    input.push(inputLines[i]);
  }

  let output = 0;

  for (i = 0; i < input.length; i++) {
    if (input[i] === "++X" || input[i] === "X++") {
      output++;
    }

    if (input[i] === "--X" || input[i] === "X--") {
      output--;
    }
  }

  console.log(output);
}
