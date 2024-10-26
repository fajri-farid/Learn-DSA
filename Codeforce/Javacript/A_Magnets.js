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
  let magnetTotal = inputLines[0];
  magnetTotal = Number(magnetTotal);

  let magnetDetail = [];

  for (let i = 1; i <= magnetTotal; i++) {
    magnetDetail.push(inputLines[i].split(" ").map(Number));
  }

  magnetDetail = magnetDetail.flat();

  let position = 1;

  for (i = 0; i < magnetTotal - 1; i++) {
    if (magnetDetail[i] != magnetDetail[i + 1]) {
      position++;
    }
  }

  console.log(position);
}

// ANOTHER SOLUTION
// const magnetTotal = parseInt(inputLines[0], 10);
// let position = 1; // Mulai dengan 1 karena ada setidaknya satu grup

// for (let i = 1; i < magnetTotal; i++) {
//   if (inputLines[i] !== inputLines[i + 1]) {
//     position++; // Tambah posisi jika ada perubahan
//   }
// }

// console.log(position);
