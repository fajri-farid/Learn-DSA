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
  let currentYear = inputLines[0];
  currentYear = Number(currentYear);

  function findUniqueYear(year) {
    x = year.split("");

    for (let i = 0; i < year.length; i++) {
      temp = x[i];
      for (let j = i + 1; j < year.length; j++) {
        if (temp === x[j]) {
          return false;
        }
      }
    }
    return true;
  }

  let nearUniqueYear = currentYear;

  do {
    nearUniqueYear++;
  } while (!findUniqueYear(nearUniqueYear.toString()));

  console.log(nearUniqueYear);
}
