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
  let drinkTotal = parseInt(inputLines[0]);

  let percentJuice = inputLines[1].split(" ").map(Number);

  //   console.log(percentJuice);

  let totalPercent = 0;

  for (i = 0; i < drinkTotal; i++) {
    totalPercent += percentJuice[i];
  }

  let volumeFraction = totalPercent / drinkTotal;

  console.log(volumeFraction.toFixed(12));
}
