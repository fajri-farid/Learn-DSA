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

  for (i = 0; i < b; i++) {
    if (a % 10 != 0) {
      a--;
    } else {
      a /= 10;
    }
  }

  console.log(a);
}
