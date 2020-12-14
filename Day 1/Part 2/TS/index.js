"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
let input;
try {
    const file = require("fs").readFileSync("./input.txt", { encoding: "utf-8" });
    input = (_a = file === null || file === void 0 ? void 0 : file.match(/[0-9]+/g)) === null || _a === void 0 ? void 0 : _a.map((v) => +v);
}
catch (_) {
    process.exit(-1);
}
const subset_sum_1 = require("./subset_sum");
const results = subset_sum_1.subset_sum(input, 2020, { limit: 2, unique: false });
for (const result of results) {
    console.log(result.reduce((a, c) => a * input[c], 1));
}
