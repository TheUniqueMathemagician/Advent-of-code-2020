"use strict";
exports.__esModule = true;
var fs = require("fs");
var file;
try {
    file = fs.readFileSync("../../../Inputs/Day 4.txt", { encoding: "utf-8" });
}
catch (_) {
    process.exit(-1);
}
var passports = [];
passports = file.split("\r\n\r\n").map(function (e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var raw_byr = (_b = (_a = e.match(/(?<=byr:)\S+/gim)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    var raw_iyr = (_d = (_c = e.match(/(?<=iyr:)\S+/gim)) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : null;
    var raw_eyr = (_f = (_e = e.match(/(?<=eyr:)\S+/gim)) === null || _e === void 0 ? void 0 : _e[0]) !== null && _f !== void 0 ? _f : null;
    var raw_hgt = (_h = (_g = e.match(/(?<=hgt:)\S+/gim)) === null || _g === void 0 ? void 0 : _g[0]) !== null && _h !== void 0 ? _h : null;
    var raw_hcl = (_k = (_j = e.match(/(?<=hcl:)\S+/gim)) === null || _j === void 0 ? void 0 : _j[0]) !== null && _k !== void 0 ? _k : null;
    var raw_ecl = (_m = (_l = e.match(/(?<=ecl:)\S+/gim)) === null || _l === void 0 ? void 0 : _l[0]) !== null && _m !== void 0 ? _m : null;
    var raw_pid = (_p = (_o = e.match(/(?<=pid:)\S+/gim)) === null || _o === void 0 ? void 0 : _o[0]) !== null && _p !== void 0 ? _p : null;
    var byr = null;
    if (raw_byr !== null && +raw_byr <= 2002 && +raw_byr >= 1920) {
        byr = +raw_byr;
    }
    var iyr = null;
    if (raw_iyr !== null && +raw_iyr <= 2020 && +raw_iyr >= 2010) {
        iyr = +raw_iyr;
    }
    var eyr = null;
    if (raw_eyr !== null && +raw_eyr <= 2030 && +raw_eyr >= 2020) {
        eyr = +raw_eyr;
    }
    var hgt = null;
    if (raw_hgt !== null) {
        var _r = (_q = /^(\d+)(in|cm)$/.exec(raw_hgt)) !== null && _q !== void 0 ? _q : [
            ,
            null,
            null
        ], raw_hgt_number = _r[1], raw_hgt_type = _r[2];
        if (raw_hgt_number && raw_hgt_type !== null) {
            switch (raw_hgt_type) {
                case "cm":
                    if (+raw_hgt_number >= 150 && +raw_hgt_number <= 193) {
                        hgt = raw_hgt;
                    }
                    break;
                case "in":
                    if (+raw_hgt_number >= 59 && +raw_hgt_number <= 76) {
                        hgt = raw_hgt;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    var hcl = null;
    if (raw_hcl === null || raw_hcl === void 0 ? void 0 : raw_hcl.match(/^#[0-9a-f]{6}$/i)) {
        hcl = raw_hcl;
    }
    var ecl = null;
    if (raw_ecl === null || raw_ecl === void 0 ? void 0 : raw_ecl.match(/(amb|blu|brn|gry|grn|hzl|oth)/)) {
        ecl = raw_ecl;
    }
    var pid = null;
    if (raw_pid === null || raw_pid === void 0 ? void 0 : raw_pid.match(/^[0-9]{9}$/)) {
        pid = +raw_pid;
    }
    return {
        byr: byr,
        iyr: iyr,
        eyr: eyr,
        hgt: hgt,
        hcl: hcl,
        ecl: ecl,
        pid: pid
    };
});
// /((?=[\s\S]*byr:[\s\S]+)(?=[\s\S]*iyr:[\s\S]+)(?=[\s\S]*eyr:[\s\S]+)(?=[\s\S]*hgt:[\s\S]+)(?=[\s\S]*hcl:.+)(?=[\s\S]*ecl:[\s\S]+)(?=[\s\S]*pid:[\s\S]+)(?=[\s\S]*cid:[\s\S]+))[\s\S]+/gim
var count = passports.reduce(function (count, passport) {
    if (passport.byr === null)
        return count;
    if (passport.iyr === null)
        return count;
    if (passport.eyr === null)
        return count;
    if (passport.hgt === null)
        return count;
    if (passport.hcl === null)
        return count;
    if (passport.ecl === null)
        return count;
    if (passport.pid === null)
        return count;
    return count + 1;
}, 0);
console.log(count);
