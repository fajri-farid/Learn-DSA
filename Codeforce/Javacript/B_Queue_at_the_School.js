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
  let [person, time] = inputLines[0].split(" ").map(Number);
  let x = inputLines[1].split("");

  for (i = 0; i < time; i++) {
    for (j = 0; j < person - 1; j++) {
      if (x[j] != x[j + 1] && x[j] === "B") {
        temp = x[j];
        x[j] = x[j + 1];
        x[j + 1] = temp;
        j++;
      }
    }
  }

  console.log(x.join(""));
}
