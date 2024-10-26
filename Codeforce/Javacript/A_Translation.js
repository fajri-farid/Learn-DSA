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

  a = a.split("").reverse().join("");

  if (a === b) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
