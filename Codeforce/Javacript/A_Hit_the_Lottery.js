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
  let money = parseInt(inputLines[0]);
  //   console.log(money);

  let pieceOfMoney = 0;

  while (money != 0) {
    // console.log("while jalan");
    if (money % 100 === 0) {
      money -= 100;
      pieceOfMoney++;
    } else if (money % 20 === 0) {
      money -= 20;
      pieceOfMoney++;
    } else if (money % 10 === 0) {
      money -= 10;
      pieceOfMoney++;
    } else if (money % 5 === 0) {
      money -= 5;
      pieceOfMoney++;
    } else if (money % 1 === 0) {
      money -= 1;
      pieceOfMoney++;
    }
  }

  console.log(pieceOfMoney);
}
