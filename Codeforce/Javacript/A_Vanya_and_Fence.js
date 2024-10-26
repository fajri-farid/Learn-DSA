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
  let a = inputLines[0].split(" ").map(Number);
  let b = inputLines[1].split(" ");

  let person = a[0];
  let heightWall = a[1];

  widht = 0;

  for (i = 0; i < person; i++) {
    if (b[i] > heightWall) {
      widht = widht + 2;
    } else {
      widht = widht + 1;
    }
  }

  console.log(widht);
}
