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
  let team = parseInt(inputLines[0]);
  let y = [];
  for (i = 1; i <= team; i++) {
    a = inputLines[i].split(" ").map(Number);
    y.push(a);
  }
  //   console.log(y);
  //   console.log(y[0][0]);
  //   console.log("");

  const pertandingan = team * (team - 1);
  let totalGuestUniform = 0;

  for (i = 0; i < team; i++) {
    if (i > 0) {
      let temp = y[i % team];
      y[i % team] = y[0];
      y[0] = temp;
      //   console.log("kandang:");
      //   console.log(y[0]);
      //   console.log(y);
      //   console.log("");
    }

    for (j = 1; j < team; j++) {
      //   console.log(y);
      //   console.log("....");
      //   console.log("y[0][0]: ", y[0][0]);
      //   console.log("j sekarang: ", j);
      //   console.log("y[j][1]: ", y[j][1]);

      if (y[0][0] === y[j][1]) {
        totalGuestUniform++;
        // console.log("total bertambah: ", totalGuestUniform);
      }

      //   console.log("");
    }

    // console.log("====");
  }

  //   console.log("");
  console.log(totalGuestUniform);
}
