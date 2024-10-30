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
  let k = parseInt(inputLines[0]);
  let l = parseInt(inputLines[1]);
  let m = parseInt(inputLines[2]);
  let n = parseInt(inputLines[3]);
  let d = parseInt(inputLines[4]);

  let naga = [];
  //   let x = 1;
  //   let y = 2;
  //   let z = 2;

  //   naga.push(x);
  //   naga.push(z);
  //   naga.push(y);

  //   console.log(naga);

  function kelipatan(x) {
    for (i = x; i <= d; i += x) {
      naga.push(i);
    }
  }

  kelipatan(k);
  kelipatan(l);
  kelipatan(m);
  kelipatan(n);

  //   console.log(naga);

  let setNaga = new Set(naga);
  setNaga = [...setNaga];

  //   console.log(setNaga);
  //   console.log(setNaga.length);

  let damagedDragon = setNaga.length;
  console.log(damagedDragon);
}
