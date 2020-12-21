let input: Array<number>;

try {
  const file = require("fs").readFileSync("./input.txt", { encoding: "utf-8" });
  input = file?.match(/[0-9]+/g)?.map((v: string) => +v);
} catch (_) {
  process.exit(-1);
}

import { subset_sum } from "./subset_sum";

const results = subset_sum(input, 2020, { limit: 2, unique: false });

for (const result of results) {
  console.log(result.reduce((a: number, c: number) => a * input[c], 1));
}
