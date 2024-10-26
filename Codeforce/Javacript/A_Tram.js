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
  let a = parseInt(inputLines[0]);
  let b = [];

  for (i = 0; i < a; i++) {
    let values = inputLines[i + 1].split(" ");
    b.push(parseInt(values[0]));
    b.push(parseInt(values[1]));
  }

  //   console.log(b);

  let max = 0;
  let keluar = 0;
  let masuk = 0;
  let insideTram = 0;
  let maxTemp;

  for (let i = 0; i < a * 2; i += 2) {
    keluar = b[i];
    masuk = b[i + 1];
    // console.log("b[i]", keluar);
    // console.log("b[i+1]", masuk);

    if (i == 0) {
      insideTram = masuk;
      maxTemp = insideTram;
    } else if (i != 0) {
      insideTram = insideTram - keluar + masuk;
      maxTemp = insideTram;
      // console.log("else dijalankan");
      // console.log("inside tram if:", insideTram);
      // console.log("keluar if: ", keluar);
    }

    // console.log("inside tram", insideTram);
    // console.log("maxTemp: ", maxTemp);

    if (maxTemp > max) {
      max = maxTemp;
    }

    // console.log(i);
    // console.log(max);
    // console.log();
  }

  // console.log("Maximum didalam tram", max);
  console.log(max);
}
