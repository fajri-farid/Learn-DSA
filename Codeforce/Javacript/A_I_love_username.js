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
  let totalCase = parseInt(inputLines[0]);
  let y = inputLines[1].split(" ").map(Number);

  let min = y[0];
  let max = y[0];
  let performance = 0;

  for (i = 1; i < totalCase; i++) {
    // console.log("min: ", min);
    // console.log("max: ", max);
    // console.log("y[i]: ", y[i]);
    // console.log("for jalan");

    if (y[i] < min) {
      //   console.log("if jalan");
      performance++;
      min = y[i];
      //   console.log("min: ", min);
    } else if (y[i] > max) {
      //   console.log("else jalan");
      performance++;
      max = y[i];
      //   console.log("max: ", max);
    }
    // console.log("performance: ", performance);
    // console.log("");
  }

  console.log(performance);
}
