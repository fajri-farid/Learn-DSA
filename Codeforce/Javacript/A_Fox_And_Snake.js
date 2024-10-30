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
  let dimensi = inputLines[0].split(" ").map(Number);

  //   console.log(dimensi);
  let genap = 1;
  let kolom = dimensi[1];
  //   console.log(kolom);

  for (i = 0; i < dimensi[0]; i++) {
    for (j = 0; j < kolom; j++) {
      //   console.log(j);
      if ((i + 1) % 2 != 0) {
        process.stdout.write("#");
      } else {
        if (genap % 2 != 0) {
          if (j != kolom - 1) {
            process.stdout.write(".");
          } else {
            process.stdout.write("#");
          }
        } else {
          if (j === 0) {
            process.stdout.write("#");
          } else {
            process.stdout.write(".");
          }
        }
      }
    }

    if ((i + 1) % 2 === 0) {
      genap++;
    }

    // console.log(j);
    // console.log(i);
    console.log("");
  }
}

// process.stdout.write("#");
