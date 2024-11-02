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

  let time = 240 - y[1];
  const totalProblems = y[0];
  let totalSolutions = 0;

  for (i = 0; i < totalProblems; i++) {
    problems = (i + 1) * 5;

    if (time - problems >= 0) {
      totalSolutions++;
      time -= problems;
    } else {
      break;
    }
  }

  console.log(totalSolutions);
}
