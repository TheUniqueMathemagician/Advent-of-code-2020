import * as fs from "fs";

let input: string = "";

try {
  input = fs.readFileSync("../../Inputs/Day 6.txt", { encoding: "utf-8" });
} catch (_) {
  process.exit(-1);
}

const groups_answers = input.split("\r\n\r\n");

// Part 1

const groups_answers_count_anyone = groups_answers.map(
  (e) =>
    e
      .replace(/\r\n/g, "")
      .split("")
      .reduce((a, c) => a | (1 << (c.charCodeAt(0) - 97)), 0)
      .toString(2)
      .replace(/0/g, "").length
);

console.log(groups_answers_count_anyone.reduce((a, c) => a + c, 0));

// Part 2

const groups_answers_count_everyone = groups_answers.map(
  (e) =>
    (e.match(/.+/g) ?? [])
      .map((e) =>
        e.split("").reduce((a, c) => a | (1 << (c.charCodeAt(0) - 97)), 0)
      )
      .reduce((a, c) => a & c)
      .toString(2)
      .replace(/0/g, "").length
);

console.log(groups_answers_count_everyone.reduce((a, c) => a + c, 0));
