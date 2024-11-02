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
  let totalCases = parseInt(inputLines[0]);

  let y = [];

  for (i = 1; i <= totalCases; i++) {
    a = inputLines[i].toUpperCase();
    y.push(a);
  }

  //   console.log(y);

  for (i = 0; i < totalCases; i++) {
    if (y[i] === "YES") {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
