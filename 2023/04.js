// Run directly in https://adventofcode.com/2023/day/4/input developer console or local Node.js environment

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
