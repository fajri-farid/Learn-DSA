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
  let y = inputLines[0].split(" ").map(Number);

  let blue, red;

  red = y[0];
  blue = y[1];

  //   console.log(red, blue);

  let fashionDay = 0;
  let regularDay = 0;

  while (red > 0 && blue > 0) {
    red--;
    blue--;
    fashionDay++;
  }

  if (red > 0) {
    regularDay = Math.floor(red / 2);
  }

  if (blue > 0) {
    regularDay = Math.floor(blue / 2);
  }

  //   console.log(fashionDay);
  //   console.log(regularDay);

  console.log(fashionDay, regularDay);
}
