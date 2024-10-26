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
  a = Number(a);
  let b = inputLines[1].split("");

  let Anton = 0;
  let Danik = 0;

  for (i = 0; i < a; i++) {
    if (b[i] === "A") {
      Anton++;
    } else if (b[i] === "D") {
      Danik++;
    }
  }

  if (Anton > Danik) {
    console.log("Anton");
  } else if (Anton < Danik) {
    console.log("Danik");
  } else {
    console.log("Friendship");
  }
}
