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

function getLength(word) {
  return word.length - 2;
}

function solve() {
  let n = parseInt(inputLines[0]);

  for (let i = 1; i <= n; i++) {
    let word = inputLines[i];
    if (word.length <= 10) {
      console.log(word);
    } else {
      let output = word[0] + getLength(word) + word[word.length - 1];
      console.log(output);
    }
  }
}
