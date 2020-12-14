let input;

try {
  input = require("fs")
    .readFileSync("./input.txt", { encoding: "utf-8" })
    .match(/[0-9]+/g)
    .map((v) => +v);
} catch (_) {
  process.exit(-1);
}

const results = require("./subset_sum")(input, 2020, true, true);

console.log("Results are :", results);
console.log("Answer is :", results[0][0] * results[0][1]);
