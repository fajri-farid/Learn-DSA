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
  let totalSoal = parseInt(inputLines[0]);
  let x = inputLines[1].split(" ").map(Number);
  let y = inputLines[2].split(" ").map(Number);

  let soalBisaDikerjakan = [];

  function totalNilaiMaximum(x) {
    total = 0;
    for (i = 0; i < x; i++) {
      total += i + 1;
    }

    return total;
  }

  //   console.log(soalBisaDikerjakan);

  for (i = 1; i < x[0] + 1; i++) {
    soalBisaDikerjakan.push(x[i]);
  }

  for (i = 1; i < y[0] + 1; i++) {
    soalBisaDikerjakan.push(y[i]);
  }

  // console.log(soalBisaDikerjakan);

  soalBisaDikerjakan = new Set(soalBisaDikerjakan);
  soalBisaDikerjakan = [...soalBisaDikerjakan];

  // console.log(soalBisaDikerjakan);

  let total = 0;
  for (i = 0; i < soalBisaDikerjakan.length; i++) {
    total += soalBisaDikerjakan[i];
  }

  // console.log(total);

  // console.log("total nilai: ", totalNilaiMaximum(4));

  if (total == totalNilaiMaximum(totalSoal)) {
    console.log("I become the guy.");
  } else {
    console.log("Oh, my keyboard!");
  }

  // console.log("total: ", total);
  // console.log("totalNilaiMaximum(x)");
}
