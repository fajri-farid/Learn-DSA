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
  let totalHuruf = parseInt(inputLines[0]);
  let input = inputLines[1];
  input = input.toLowerCase();

  let huruf = new Set();

  for (let char of input) {
    huruf.add(char);
  }

  hurufTotal = [...huruf];

  hurufTotal = hurufTotal.length;

  if (hurufTotal === 26) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
