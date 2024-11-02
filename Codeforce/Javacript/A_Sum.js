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
    a = inputLines[i].split(" ").map(Number);
    y.push(a);
  }

  //   console.log(y);
  //   console.log();

  for (i = 0; i < totalCases; i++) {
    x = y[i];
    // console.log(x);
    // console.log(x[i]);
    // console.log(x[i + 1]);
    // console.log(x[i + 2]);

    if (x[0] + x[1] === x[2] || x[0] + x[2] === x[1] || x[1] + x[2] === x[0]) {
      console.log("YES");
    } else {
      console.log("NO");
    }

    // console.log();
  }
}
