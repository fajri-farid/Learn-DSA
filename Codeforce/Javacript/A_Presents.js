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
  let friend = parseInt(inputLines[0]);

  let friendGift = inputLines[1].split(" ").map(Number);

  let giftToFriend = Array(friend)
    .fill(null)
    .map(() => []);

  for (i = 0; i < friend; i++) {
    toFriend = friendGift[i];
    giftToFriend[toFriend - 1].push(i + 1);
  }

  giftToFriend = giftToFriend.flat();
  console.log(giftToFriend.join(" "));
}

// ANOTHER SOLUTION:

// function solve() {
//   let friend = parseInt(inputLines[0]);

//   let friendGift = inputLines[1].split(" ").map(Number);

//   let giftToFriend = Array(friend).fill(0);

//   for (let i = 0; i < friend; i++) {
//     let toFriend = friendGift[i];
//     giftToFriend[toFriend - 1] = i + 1;
//   }

//   console.log(giftToFriend.join(" "));
// }
