// Run directly in https://adventofcode.com/2023/day/6/input developer console or local Node.js environment

let input;

let isNode = typeof exports !== "undefined" && typeof window === "undefined";

if (isNode) {
  const fs = require("fs");
  try {
    input = fs.readFileSync("06.txt", "utf8");
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

let times = input[0].match(/\d+/g).map(Number);

let distances = input[1].match(/\d+/g).map(Number);

let pos = Array(times.length).fill(0);

for (let i = 0; i < times.length; i++) {
  let time = times[i];
  let distance = distances[i];
  for (let j = 0; j < time; j++) {
    let dtotal = j * (time - j);
    if (dtotal > distance) {
      pos[i]++;
    }
  }
}

let res = pos.reduce((a, b) => a * b, 1);
console.log(res);

let time = Number(input[0].match(/\d+/g).join(""));

let distance = Number(input[1].match(/\d+/g).join(""));

console.log(time, distance);
