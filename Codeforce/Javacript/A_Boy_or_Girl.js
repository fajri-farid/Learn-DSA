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
  let a = inputLines[0];

  function findUniqueWord(str) {
    const unique = new Set(str);

    return unique.size;
  }

  result = findUniqueWord(a);

  if (result % 2 == 0) {
    console.log("CHAT WITH HER!");
  } else {
    console.log("IGNORE HIM!");
  }
}
