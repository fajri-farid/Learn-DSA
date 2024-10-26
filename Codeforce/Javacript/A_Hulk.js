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
  let a = parseInt(inputLines[0]);

  for (i = 0; i < a; i++) {
    if (a === 1) {
      process.stdout.write("I hate ");
      process.stdout.write("it");
      break;
    }

    if (i === 0) {
      process.stdout.write("I hate ");
    } else if (i % 2 != 0) {
      process.stdout.write("that I love ");
    } else {
      process.stdout.write("that I hate ");
    }
  }

  if (a > 1) {
    process.stdout.write("it");
  }
}
