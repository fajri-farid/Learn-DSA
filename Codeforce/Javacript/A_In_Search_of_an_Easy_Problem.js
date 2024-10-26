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
  let asker = inputLines[0];
  asker = Number(asker);
  let x = inputLines[1].split(" ").map(Number);

  hard = 0;

  for (i = 0; i < asker; i++) {
    if (x[i] === 1) {
      hard++;
    }
  }

  if (hard > 0) {
    console.log("HARD");
  } else {
    console.log("EASY");
  }
}
