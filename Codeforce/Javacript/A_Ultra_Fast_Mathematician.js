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
  let a = inputLines[0].split("").map(Number);
  let b = inputLines[1].split("").map(Number);

  let result = Array(a.length).fill(0);

  for (i = 0; i < a.length; i++) {
    x = a[i] ^ b[i];
    result[i] = x;
  }

  console.log(result.join(""));
}
