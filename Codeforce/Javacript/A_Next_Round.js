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
  let [a, b] = inputLines[0].split(" ").map(Number);
  let nilai = inputLines[1].split(" ").map(Number);

  totalNilai = 0;

  for (j = 0; j < nilai.length; j++) {
    totalNilai = totalNilai + nilai[j];
  }

  let total = 0;

  for (i = 0; i < a; i++) {
    if (nilai[i] >= nilai[b - 1] && totalNilai >= 0) {
      if (nilai[i] == 0) {
        break;
      }
      total++;
    }
  }

  console.log(total);
}
