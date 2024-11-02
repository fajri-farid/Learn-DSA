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
  let numbers = inputLines[0].split(" ").map(Number);

  let S = Math.max(...numbers);

  numbers = numbers.filter((num) => num !== S);

  let a = S - numbers[1];
  let b = S - numbers[0];
  let c = Math.abs(S - (numbers[0] + numbers[1]));

  console.log(a, b, c);
}
