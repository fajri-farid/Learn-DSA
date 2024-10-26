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

  let tahun = 0;

  while (a <= b) {
    tahun++;
    a *= 3;
    b *= 2;
  }

  console.log(tahun);
}
