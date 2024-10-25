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

function totalArr(arr) {
  let a = 0;
  for (let j = 0; j < arr.length; j++) {
    a += arr[j];
  }
  return a;
}

function solve() {
  let matrix = [];

  for (let i = 0; i < 5; i++) {
    matrix.push(inputLines[i].split(" ").map(Number));
  }

  let row = matrix.findIndex((row) => row.includes(1));
  let col = matrix[row].indexOf(1);

  row++;
  col++;

  //   console.log("row", row);
  //   console.log("col", col);

  let step = 0;

  while (row != 3) {
    if (row < 3) {
      step++;
      row++;
      //   console.log("step: ", step, " row: ", row);
    } else if (row > 3) {
      step++;
      row--;
      //   console.log("step: ", step, " row: ", row);
    }
  }

  while (col != 3) {
    if (col < 3) {
      step++;
      col++;
      //   console.log("step: ", step, " col: ", col);
    } else if (col > 3) {
      step++;
      col--;
      //   console.log("step: ", step, " col: ", col);
    }
  }

  console.log(step);
}
