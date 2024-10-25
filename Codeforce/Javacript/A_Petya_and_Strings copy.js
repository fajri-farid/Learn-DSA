const { copyFileSync } = require("fs");

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
  let b = inputLines[1];

  a = a.toLowerCase();
  b = b.toLowerCase();

  function getTotalASCII(str) {
    let total = 0;

    for (i = 0; i < str.length; i++) {
      total += str.charCodeAt(i);
    }

    return total;
  }

  x = getTotalASCII(a);
  y = getTotalASCII(b);

  console.log(x);
  console.log(y);

  if (x == y) {
    console.log(0);
  } else if (x > y) {
    console.log(1);
  } else {
    console.log(-1);
  }
}
