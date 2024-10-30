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
  let x = inputLines[0];
  let y = [];
  for (i = 1; i <= x; i++) {
    y.push(inputLines[i]);
  }

  //   console.log(x);
  //   for (i = 0; i < x; i++) {
  //     console.log(y[i]);
  //   }

  let totalSisi = 0;

  for (i = 0; i < x; i++) {
    if (y[i] === "Tetrahedron") {
      totalSisi += 4;
    } else if (y[i] === "Cube") {
      totalSisi += 6;
    } else if (y[i] === "Octahedron") {
      totalSisi += 8;
    } else if (y[i] === "Dodecahedron") {
      totalSisi += 12;
    } else if (y[i] === "Icosahedron") {
      totalSisi += 20;
    }
  }

  console.log(totalSisi);
}
