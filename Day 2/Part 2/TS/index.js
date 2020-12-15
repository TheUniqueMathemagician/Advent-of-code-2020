"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var input = "";
try {
    input = fs_1.default.readFileSync("./input.txt", { encoding: "utf-8" });
}
catch (_) {
    process.exit(-1);
}
var correct_passwords_count = 0;
correct_passwords_count = ((_a = input.match(/.+/gi)) !== null && _a !== void 0 ? _a : []).reduce(function (count, policy_and_password) {
    var _a;
    var groups = (_a = /^(\d+)-(\d+)\s([a-z]):\s([a-z]+$)/gi.exec(policy_and_password)) !== null && _a !== void 0 ? _a : [];
    var must = +(groups === null || groups === void 0 ? void 0 : groups[1]);
    var must_not = +(groups === null || groups === void 0 ? void 0 : groups[2]);
    var letter = groups === null || groups === void 0 ? void 0 : groups[3];
    var password = groups === null || groups === void 0 ? void 0 : groups[4];
    var isAtPositionOne = password[must - 1] === letter ? 1 : 0;
    var isAtPositionTwo = password[must_not - 1] === letter ? 1 : 0;
    if (isAtPositionOne ^ isAtPositionTwo) {
        return count + 1;
    }
    return count;
}, 0);
console.log(correct_passwords_count);
