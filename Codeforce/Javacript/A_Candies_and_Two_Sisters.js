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
  let totalCase = parseInt(inputLines[0]);
  let y = [];
  for (i = 1; i <= totalCase; i++) {
    a = inputLines[i].split(" ").map(Number);
    y.push(a);
  }

  //   console.log(totalCase);
  //   console.log(y);

  let hasil;

  for (i = 0; i < totalCase; i++) {
    // console.log(y[i]);
    if (y[i] > 2) {
      hasil = y[i] - 1 - y[i] / 2;
      hasil = Math.ceil(hasil);
      console.log(hasil);
    } else {
      console.log("0");
    }
    // console.log("");
  }
}
