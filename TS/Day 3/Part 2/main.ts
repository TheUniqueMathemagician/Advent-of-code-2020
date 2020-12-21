interface Slope {
  h: number;
  v: number;
}

const how_many_trees = (
  slope: Slope = { h: 0, v: 0 },
  map: Array<string> = []
): number => {
  const row_length = map[0].length;
  const heigth = map.length;

  let count: number = 0;
  let search_index: number = 0;

  if (slope.v === 0) {
    return 0;
  }

  for (let i = slope.v; i < heigth; i = i + slope.v) {
    search_index = (search_index + slope.h) % row_length;

    if (map[i][search_index] === "#") {
      count++;
    }
  }

  return count;
};

import * as fs from "fs";

let file: string;
try {
  file = fs.readFileSync("../../../Inputs/Day 3.txt", { encoding: "utf-8" });
} catch (_) {
  process.exit(-1);
}

const map: Array<string> = file.match(/.+/gi) || [];
const slopes: Array<Slope> = [
  { h: 1, v: 1 },
  { h: 3, v: 1 },
  { h: 5, v: 1 },
  { h: 7, v: 1 },
  { h: 1, v: 2 }
];

const count = slopes.reduce(
  (a: number, c: Slope) => a * how_many_trees(c, map),
  1
);

console.log(count);
