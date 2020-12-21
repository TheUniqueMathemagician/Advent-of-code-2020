"use strict";
exports.__esModule = true;
var how_many_trees = function (slope, map) {
    if (slope === void 0) { slope = { h: 0, v: 0 }; }
    if (map === void 0) { map = []; }
    var row_length = map[0].length;
    var heigth = map.length;
    var count = 0;
    var search_index = 0;
    if (slope.v === 0) {
        return 0;
    }
    for (var i = slope.v; i < heigth; i = i + slope.v) {
        search_index = (search_index + slope.h) % row_length;
        if (map[i][search_index] === "#") {
            count++;
        }
    }
    return count;
};
var fs = require("fs");
var file;
try {
    file = fs.readFileSync("../../../Inputs/Day 3.txt", { encoding: "utf-8" });
}
catch (_) {
    process.exit(-1);
}
var map = file.match(/.+/gi) || [];
var slopes = [
    { h: 1, v: 1 },
    { h: 3, v: 1 },
    { h: 5, v: 1 },
    { h: 7, v: 1 },
    { h: 1, v: 2 }
];
var count = slopes.reduce(function (a, c) { return a * how_many_trees(c, map); }, 1);
console.log(count);
