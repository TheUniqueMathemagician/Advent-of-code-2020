let input;

try {
  input = require("fs")
    .readFileSync("./input.txt", { encoding: "utf-8" })
    .match(/[0-9]+/g)
    .map((v) => +v);
} catch (_) {
  process.exit(-1);
}
const test = require("./subset_sum");

const results = require("./subset_sum")(input, 6, true, true);
console.log("Results are :", results);
