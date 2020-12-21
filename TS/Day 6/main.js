"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = "";
try {
    input = fs.readFileSync("../../Inputs/Day 6.txt", { encoding: "utf-8" });
}
catch (_) {
    process.exit(-1);
}
var groups_answers = input.split("\r\n\r\n");
// Part 1
var groups_answers_count_anyone = groups_answers.map(function (e) {
    return e
        .replace(/\r\n/g, "")
        .split("")
        .reduce(function (a, c) { return a | (1 << (c.charCodeAt(0) - 97)); }, 0)
        .toString(2)
        .replace(/0/g, "").length;
});
console.log(groups_answers_count_anyone.reduce(function (a, c) { return a + c; }, 0));
// Part 2
var groups_answers_count_everyone = groups_answers.map(function (e) {
    var _a;
    return ((_a = e.match(/.+/g)) !== null && _a !== void 0 ? _a : [])
        .map(function (e) {
        return e.split("").reduce(function (a, c) { return a | (1 << (c.charCodeAt(0) - 97)); }, 0);
    })
        .reduce(function (a, c) { return a & c; })
        .toString(2)
        .replace(/0/g, "").length;
});
console.log(groups_answers_count_everyone.reduce(function (a, c) { return a + c; }, 0));
