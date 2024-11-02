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

  let n, k, l, c, d, p, nl, np;

  n = y[0];
  k = y[1];
  l = y[2];
  c = y[3];
  d = y[4];
  p = y[5];
  nl = y[6];
  np = y[7];

  let totalml = Math.floor((k * l) / (n * nl));
  let limes = Math.floor((d * c) / n);
  let salt = Math.floor(p / (np * n));

  //   console.log(totalml, limes, salt);

  let toastEachFriends = Math.min(totalml, limes, salt);

  console.log(toastEachFriends);
}
