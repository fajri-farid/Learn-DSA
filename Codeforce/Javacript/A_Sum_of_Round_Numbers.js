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

  function findRoundNumbers(n) {
    let roundNumbers = [];
    let placeValue = 1;
    let total = 0;

    while (n > 0) {
      let digit = n % 10;
      // console.log("digit: ", digit);
      if (digit !== 0) {
        // console.log("digit jalan");
        roundNumbers.push(digit * placeValue);
        total++;
      }
      n = Math.floor(n / 10);
      // console.log("n: ", n);
      placeValue *= 10;

      // console.log("roundNumbers: ", roundNumbers);
      // console.log("");
    }

    return [roundNumbers, total];
  }
  // console.log("");

  for (i = 0; i < totalCase; i++) {
    let totalRoundNumber = findRoundNumbers(y[i]);

    console.log(totalRoundNumber[1]);
    console.log(totalRoundNumber[0].join(" "));
  }
}
