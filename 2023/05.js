// Run directly in https://adventofcode.com/2023/day/5/input developer console or local Node.js environment

let input;

let seeds =
  "3139431799 50198205 3647185634 110151761 2478641666 139825503 498892555 8913570 961540761 489996751 568452082 100080382 907727477 42158689 1617552130 312026427 342640189 97088268 2049289560 336766062"
    .split(" ")
    .map((item) => parseInt(item));

const fs = require("fs");

try {
  input = fs.readFileSync("05.txt", "utf8");
  input = input.split("\n");
} catch (err) {
  console.error(err);
}

let levelMap = Array.from(Array(7), () => new Array());

let level = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "") {
    level++;
    continue;
  }
  levelMap[level].push(input[i].split(" ").map((item) => parseInt(item)));
}

let dest = [];

for (let i = 0; i < seeds.length; i++) {
  let seed = seeds[i];

  for (let level = 0; level < levelMap.length; level++) {
    let rows = levelMap[level];
    for (let j = 0; j < rows.length; j++) {
      let range = rows[j];
      if (seed >= range[1] && seed <= range[1] + range[2] - 1) {
        seed = range[0] + (seed - range[1]);
        break;
      }
    }
  }

  dest.push(seed);
}

console.log(dest.sort((a, b) => a - b)[0]);
