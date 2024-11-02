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
  let y = inputLines[0].split(" ").map(Number);
  let price, rBubles;
  price = y[0];
  rBubles = y[1];

  let total = 1;
  let totalPrice;

  while (price != 0) {
    totalPrice = total * price;
    if (totalPrice % 10 === rBubles || totalPrice % 10 === 0) {
      break;
    }
    total++;
  }

  console.log(total);
}
