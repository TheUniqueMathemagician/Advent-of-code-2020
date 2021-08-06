import fs from "fs";
let input: string = "";

try {
  input = fs.readFileSync("./input.txt", { encoding: "utf-8" });
} catch (_) {
  process.exit(-1);
}

let correct_passwords_count = 0;

correct_passwords_count = (input.match(/.+/gi) ?? []).reduce(
  (count: number, policy_and_password: string) => {
    const groups =
      /^(\d+)-(\d+)\s([a-z]):\s([a-z]+$)/gi.exec(policy_and_password) ?? [];

    const must: number = +groups?.[1];
    const must_not: number = +groups?.[2];
    const letter: string = groups?.[3];
    const password: string = groups?.[4];

    const isAtPositionOne = password[must - 1] === letter ? 1 : 0;
    const isAtPositionTwo = password[must_not - 1] === letter ? 1 : 0;

    if (isAtPositionOne ^ isAtPositionTwo) {
      return count + 1;
    }

    return count;
  },
  0
);

console.log(correct_passwords_count);
