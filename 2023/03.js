// Run directly in https://adventofcode.com/2023/day/3/input developer console or local Node.js environment

let input;

let isNode = typeof exports !== "undefined" && typeof window === "undefined";

if (isNode) {
  const fs = require("fs");
  try {
    input = fs.readFileSync("03.txt", "utf8");
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

// part1

let set = new Set();

input.forEach((item, index) => {
  let matches = [...item.matchAll(/[^\w\s.]/g)];
  matches.forEach((match) => {
    set.add(`${index},${match.index}`);
  });
});

function checkSymbol(row, colStart, colEnd) {
  function getFrame(row, colStart, colEnd) {
    let frame = [];
    frame.push(`${row},${colStart - 1}`);
    frame.push(`${row},${colEnd + 1}`);
    for (let i = colStart - 1; i <= colEnd + 1; i++) {
      frame.push(`${row - 1},${i}`);
      frame.push(`${row + 1},${i}`);
    }
    return frame;
  }

  let frame = getFrame(row, colStart, colEnd);
  for (let pos of frame) {
    if (set.has(pos)) {
      return true;
    }
  }
  return false;
}

let sum1 = 0;

input.forEach((item, index) => {
  let matches = [...item.matchAll(/\d+/g)];
  matches.forEach((match) => {
    if (checkSymbol(index, match.index, match.index + match[0].length - 1)) {
      sum1 += parseInt(match[0]);
    }
  });
});

console.log(sum1);

//part2

let map = new Map();

input.forEach((item, index) => {
  let matches = [...item.matchAll(/\*/g)];
  matches.forEach((match) => {
    map.set(`${index},${match.index}`, []);
  });
});

function addNumber(num, row, colStart, colEnd) {
  function getFrame(row, colStart, colEnd) {
    let frame = [];
    frame.push(`${row},${colStart - 1}`);
    frame.push(`${row},${colEnd + 1}`);
    for (let i = colStart - 1; i <= colEnd + 1; i++) {
      frame.push(`${row - 1},${i}`);
      frame.push(`${row + 1},${i}`);
    }
    return frame;
  }

  let frame = getFrame(row, colStart, colEnd);
  for (let pos of frame) {
    if (map.has(pos)) {
      map.set(pos, [...map.get(pos), num]);
    }
  }
}

input.forEach((item, index) => {
  let matches = [...item.matchAll(/\d+/g)];
  matches.forEach((match) => {
    addNumber(
      parseInt(match[0]),
      index,
      match.index,
      match.index + match[0].length - 1
    );
  });
});

let sum2 = 0;

for (let value of map.values()) {
  if (value.length === 2) {
    sum2 += value[0] * value[1];
  }
}

console.log(sum2);
