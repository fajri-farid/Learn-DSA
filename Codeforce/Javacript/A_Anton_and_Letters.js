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
  let x = inputLines[0];
  let content = x.slice(1, -1).trim();
  let count;

  //   console.log(content);

  if (content === "") {
    count = 0;
  } else {
    let setX = new Set(content.split(", "));
    count = setX.size;
  }

  console.log(count);
}
