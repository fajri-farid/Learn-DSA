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
  let [a, b, c] = inputLines[0].split(" ").map(Number);

  let totalHarga = 0;

  for (i = 0; i < c; i++) {
    harga = a * (i + 1);
    totalHarga += harga;
  }

  if (b < totalHarga) {
    utang = totalHarga - b;
    console.log(utang);
  } else {
    console.log(0);
  }
}
