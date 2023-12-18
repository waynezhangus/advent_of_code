let input;

let isNode = typeof exports !== "undefined" && typeof window === "undefined";

if (isNode) {
  const fs = require("fs");
  try {
    input = fs.readFileSync("07.txt", "utf8");
    input = input.split("\n").filter((item) => item !== "");
  } catch (err) {
    console.error(err);
  }
} else {
  input = document
    .querySelector("pre")
    .innerText.split("\n")
    .filter((item) => item !== "");
}

let labels = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
const types = ["5", "41", "32", "311", "221", "2111", "11111"];

function compType(cards) {
  let map = new Map();
  for (let char of cards.slice(0, 5)) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let arr = [...map.values()];
  arr.sort((a, b) => b - a);
  return types.indexOf(arr.join(""));
}

function compare(a, b, labels) {
  for (let i = 0; i < 5; i++) {
    if (a[i] !== b[i]) return labels.indexOf(b[i]) - labels.indexOf(a[i]);
  }
  return 0;
}

let input1 = [...input].sort((a, b) => {
  let aType = compType(a);
  let bType = compType(b);
  if (aType !== bType) return bType - aType;
  return compare(a, b, labels);
});

let sum1 = 0;

for (let i = 0; i < input.length; i++) {
  sum1 += (i + 1) * Number(input1[i].split(" ")[1]);
}

console.log(sum1);

labels = ["A", "K", "Q", "T", "9", "8", "7", "6", "5", "4", "3", "2", "J"];

function compType2(cards) {
  let map = new Map();
  for (let char of cards.slice(0, 5)) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let wild = map.get("J") || 0;
  map.delete("J");
  let arr = [...map.values()];
  arr.sort((a, b) => b - a);
  if (arr.length != 0) arr[0] += wild;
  else arr.push(wild);
  return types.indexOf(arr.join(""));
}

let input2 = [...input].sort((a, b) => {
  let aType = compType2(a);
  let bType = compType2(b);
  if (aType !== bType) return bType - aType;
  return compare(a, b, labels);
});

let sum2 = 0;

for (let i = 0; i < input.length; i++) {
  sum2 += (i + 1) * Number(input2[i].split(" ")[1]);
}

console.log(sum2);
