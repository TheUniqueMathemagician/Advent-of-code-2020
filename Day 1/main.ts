let input: Array<number>;

try {
  const file = require("fs").readFileSync("./input.txt", { encoding: "utf-8" });
  input = file?.match(/[0-9]+/g)?.map((v: string) => +v);
} catch (_) {
  process.exit(-1);
}

import { subset_sum } from "./subset_sum";

// Part 1

const results_1 = subset_sum(input, 2020, { limit: 2, unique: true });

for (const result of results_1) {
  console.log(result.reduce((a: number, c: number) => a * input[c], 1));
}

// Part 2

const results_2 = subset_sum(input, 2020, { limit: 2, unique: true });

for (const result of results_2) {
  console.log(result.reduce((a: number, c: number) => a * input[c], 1));
}
