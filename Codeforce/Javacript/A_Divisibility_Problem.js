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

  let masihKurang;

  for (i = 1; i <= a; i++) {
    x = inputLines[i].split(" ").map(Number);

    y = x[0];
    z = x[1];

    if (y > z && y % z != 0) {
      masihKurang = z - (y % z);
    } else if (y < z && y % z != 0) {
      masihKurang = z - y;
    } else {
      masihKurang = 0;
    }

    console.log(masihKurang);
  }
}

// SOLUSI LAIN:
// function solve() {
//   let t = parseInt(inputLines[0]);

//   for (let i = 1; i <= t; i++) {
//     const [a, b] = inputLines[i].split(" ").map(Number);

//     const remainder = a % b;

//     const moves = remainder === 0 ? 0 : b - remainder;

//     console.log(moves);
//   }
// }
