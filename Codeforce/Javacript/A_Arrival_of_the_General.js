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
  let totalPrajurit = parseInt(inputLines[0]);
  let tinggiPrajurit = inputLines[1].split(" ").map(Number);

  // totalPrajurit = 8;
  function findMax(x) {
    let max = 0;
    for (i = 1; i < x.length; i++) {
      if (x[i] > x[max]) {
        max = i;
      }
    }

    return max;
  }

  function findMin(x) {
    let min = 0;
    for (i = 1; i < x.length; i++) {
      if (x[i] < x[min]) {
        min = i;
      } else if (x[i] === x[min]) {
        min = i;
      }
    }

    return min + 1;
  }

  // y = [1, 10, 2, 3, 4, 100, 200, 8];
  // y = [33, 44, 11, 22];
  y = tinggiPrajurit;
  // console.log(findMax(y));
  // console.log(findMin(y));
  // console.log(y);
  // console.log(y.length);
  // console.log("");

  let besar = findMax(y);

  let min = findMin(y);

  // console.log("besar: ", besar);
  // console.log("kecil: ", min);
  // console.log("");

  if (besar >= min) {
    min = y.length - (findMin(y) + 1);
    // console.log("true");
  } else {
    min = y.length - findMin(y);
  }

  hasil = besar + min;
  console.log(hasil);
}

// OPTIMAL SOLUTION
// function solve() {
//   const totalPrajurit = parseInt(inputLines[0]);
//   const tinggiPrajurit = inputLines[1].split(" ").map(Number);

//   let maxIndex = 0;
//   let minIndex = 0;

//   for (let i = 1; i < tinggiPrajurit.length; i++) {
//     if (tinggiPrajurit[i] > tinggiPrajurit[maxIndex]) {
//       maxIndex = i;
//     }
//     if (tinggiPrajurit[i] <= tinggiPrajurit[minIndex]) {
//       minIndex = i;
//     }
//   }

//   let hasil;
//   if (maxIndex > minIndex) {
//     hasil = maxIndex + (tinggiPrajurit.length - minIndex - 2);
//   } else {
//     hasil = maxIndex + (tinggiPrajurit.length - minIndex - 1);
//   }

//   console.log(hasil);
// }
