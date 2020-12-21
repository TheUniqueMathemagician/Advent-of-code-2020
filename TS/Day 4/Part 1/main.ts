import * as fs from "fs";

let file: string;
try {
  file = fs.readFileSync("../../../Inputs/Day 4.txt", { encoding: "utf-8" });
} catch (_) {
  process.exit(-1);
}

interface Passport {
  byr: number | null;
  iyr: number | null;
  eyr: number | null;
  hgt: string | null;
  hcl: string | null;
  ecl: string | null;
  pid: number | null;
  cid: number | null;
}

let passports: Array<Passport> = [];

passports = file.split("\r\n\r\n").map((e: string) => {
  let raw_byr: string | null = e.match(/(?<=byr:)\S+/gim)?.[0] ?? null;
  let raw_iyr: string | null = e.match(/(?<=iyr:)\S+/gim)?.[0] ?? null;
  let raw_eyr: string | null = e.match(/(?<=eyr:)\S+/gim)?.[0] ?? null;
  let raw_hgt: string | null = e.match(/(?<=hgt:)\S+/gim)?.[0] ?? null;
  let raw_hcl: string | null = e.match(/(?<=hcl:)\S+/gim)?.[0] ?? null;
  let raw_ecl: string | null = e.match(/(?<=ecl:)\S+/gim)?.[0] ?? null;
  let raw_pid: string | null = e.match(/(?<=pid:)\S+/gim)?.[0] ?? null;

  let byr: number | null = null;
  if (raw_byr !== null && +raw_byr <= 2002 && +raw_byr >= 1920) {
    byr = +raw_byr;
  }

  let iyr: number | null = null;
  if (raw_iyr !== null && +raw_iyr <= 2020 && +raw_iyr >= 2010) {
    iyr = +raw_iyr;
  }

  let eyr: number | null = null;
  if (raw_eyr !== null && +raw_eyr <= 2030 && +raw_eyr >= 2020) {
    eyr = +raw_eyr;
  }

  let hgt: string | null = null;
  if (raw_hgt !== null) {
    let [, raw_hgt_number, raw_hgt_type] = /^(\d+)(in|cm)$/.exec(raw_hgt) ?? [
      ,
      null,
      null
    ];

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

  let hcl = null;
  if (raw_hcl?.match(/^#[0-9a-f]{6}$/i)) {
    hcl = raw_hcl;
  }

  let ecl = null;
  if (raw_ecl?.match(/(amb|blu|brn|gry|grn|hzl|oth)/)) {
    ecl = raw_ecl;
  }

  let pid = null;

  if (raw_pid?.match(/^[0-9]{9}$/)) {
    pid = +raw_pid;
  }

  return {
    byr,
    iyr,
    eyr,
    hgt,
    hcl,
    ecl,
    pid
  } as Passport;
});

// /((?=[\s\S]*byr:[\s\S]+)(?=[\s\S]*iyr:[\s\S]+)(?=[\s\S]*eyr:[\s\S]+)(?=[\s\S]*hgt:[\s\S]+)(?=[\s\S]*hcl:.+)(?=[\s\S]*ecl:[\s\S]+)(?=[\s\S]*pid:[\s\S]+)(?=[\s\S]*cid:[\s\S]+))[\s\S]+/gim

const count = passports.reduce((count: number, passport: Passport) => {
  if (passport.byr === null) return count;
  if (passport.iyr === null) return count;
  if (passport.eyr === null) return count;
  if (passport.hgt === null) return count;
  if (passport.hcl === null) return count;
  if (passport.ecl === null) return count;
  if (passport.pid === null) return count;
  return count + 1;
}, 0);

console.log(count);
