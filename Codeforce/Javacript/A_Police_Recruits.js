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
  //   console.log(y);

  let kasus = 0;
  let polisi = 0;

  for (let i = 0; i < totalCase; i++) {
    if (y[i] < 0) {
      if (polisi > 0) {
        polisi--;
      } else {
        kasus += Math.abs(y[i]);
      }
    } else if (y[i] > 0) {
      polisi += y[i];
    }
  }

  console.log(kasus);
}
