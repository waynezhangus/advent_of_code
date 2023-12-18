// Run directly in https://adventofcode.com/2023/day/1/input developer console or local Node.js environment

let input;

let isNode = typeof exports !== "undefined" && typeof window === "undefined";

if (isNode) {
  const fs = require("fs");
  try {
    input = fs.readFileSync("01.txt", "utf8");
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

let sum1 = input.reduce((acc, item) => {
  let numArr = item.match(/\d/g);
  return acc + parseInt(numArr.at(0) + numArr.at(-1));
}, 0);

console.log(sum1);

let matches = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

input = input.map((item) =>
  matches.reduce(
    (acc, match, index) =>
      acc.replace(new RegExp(match, "g"), `${match}${index + 1}${match}`),
    item
  )
);

let sum2 = input.reduce((acc, item) => {
  let numArr = item.match(/\d/g);
  return acc + parseInt(numArr.at(0) + numArr.at(-1));
}, 0);

console.log(sum2);
