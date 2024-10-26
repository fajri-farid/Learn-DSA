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

  let totalLucky = 0;

  for (i = 0; i < a.length; i++) {
    if (a[i] === 4 || a[i] === 7) {
      totalLucky++;
    }
  }

  if (totalLucky === 4 || totalLucky === 7) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
