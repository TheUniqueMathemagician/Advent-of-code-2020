"use strict";
var _a;
exports.__esModule = true;
var fs = require("fs");
var input;
try {
    input = fs.readFileSync("../../Inputs/Day 5.txt", { encoding: "utf-8" });
}
catch (_) {
    process.exit(-1);
}
var BSPs = input.match(/.+/g);
var seat_positions = (_a = BSPs === null || BSPs === void 0 ? void 0 : BSPs.map(function (BSP) {
    var _a, _b;
    var e = /([FB]{7})([LR]{3})/.exec(BSP);
    var row = parseInt((_a = e === null || e === void 0 ? void 0 : e[1].replace(/F/g, "0").replace(/B/g, "1")) !== null && _a !== void 0 ? _a : "", 2);
    var column = parseInt((_b = e === null || e === void 0 ? void 0 : e[2].replace(/L/g, "0").replace(/R/g, "1")) !== null && _b !== void 0 ? _b : "", 2);
    return {
        row: row,
        column: column
    };
})) !== null && _a !== void 0 ? _a : [];
var seats = seat_positions
    .map(function (_a) {
    var row = _a.row, column = _a.column;
    return row * 8 + column;
})
    .sort(function (a, b) { return a - b; });
// console.log(seats[seats.length - 1]);
var seat = seats[0];
for (var i = 1; i < seats.length; i++) {
    seat++;
    if (seats[i] != seat) {
        console.log(seat);
        break;
    }
}
