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
  let roomTotal = inputLines[0];
  roomTotal = Number(roomTotal);

  // console.log("roomTotal", roomTotal);

  let roomDetail = [];

  for (let i = 1; i <= roomTotal; i++) {
    roomDetail.push(inputLines[i].split(" ").map(Number));
  }

  roomDetail = roomDetail.flat();

  // console.log(roomDetail);

  let kamarKosong = 0;

  let isi, kapasitas, sisa;

  for (i = 0; i < roomTotal * 2; i += 2) {
    isi = roomDetail[i];
    kapasitas = roomDetail[i + 1];

    sisa = kapasitas - isi;

    // console.log("isi", isi);
    // console.log("kapasitas", kapasitas);
    // console.log("sisa", sisa);

    if (sisa >= 2) {
      kamarKosong += 1;
    }

    // console.log("kamar kosong: ", kamarKosong);
    // console.log();
  }

  console.log(kamarKosong);
}
