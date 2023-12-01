// Run directly on: https://adventofcode.com/2023/day/1/input developer console

let input = document
  .querySelector("pre")
  .innerText.split("\n")
  .filter((item) => item !== "");

let res1 = input.reduce((acc, item) => {
  let numArr = item.match(/\d/g);
  return acc + parseInt(numArr.at(0) + numArr.at(-1));
}, 0);

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

let res2 = input.reduce((acc, item) => {
  let numArr = item.match(/\d/g);
  return acc + parseInt(numArr.at(0) + numArr.at(-1));
}, 0);
