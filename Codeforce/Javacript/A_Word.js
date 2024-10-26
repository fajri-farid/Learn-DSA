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
  let a = inputLines[0];

  let kecil = 0;
  let besar = 0;

  for (i = 0; i < a.length; i++) {
    let char = a[i];
    let x = char.charCodeAt();

    if (x >= 65 && x <= 90) {
      besar++;
    } else if (x >= 97 && x <= 122) {
      kecil++;
    }
  }

  if (kecil > besar) {
    console.log(a.toLowerCase());
  } else if (kecil < besar) {
    console.log(a.toUpperCase());
  } else {
    console.log(a.toLowerCase());
  }
}
