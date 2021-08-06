interface Policy {
  min: number;
  max: number;
  letter: string;
}

interface Password {
  value: string;
  policy: Policy;
}

let passwords: Array<Password> = [];

try {
  const entries: Array<string> =
    require("fs")
      .readFileSync("./input.txt", {
        encoding: "utf-8"
      })
      .match(/.+/gi) ?? [];

  passwords = entries.map(
    (e: string): Password => {
      const tmp = e.split(" ");

      const min: number = +tmp[0].split("-")[0];
      const max: number = +tmp[0].split("-")[1];
      const letter: string = tmp[1].slice(0, tmp[1].length - 1);
      const value: string = tmp[2];

      return {
        value,
        policy: {
          min,
          max,
          letter
        }
      };
    }
  );
} catch (_) {
  process.exit(-1);
}

let valid: number = 0;

for (const password of passwords) {
  // const length: number = (
  //   password.value.match(new RegExp(`/${password.policy.letter}/`)) ?? []
  // ).length;

  const count: number = (
    password.value.match(new RegExp(password.policy.letter, "gi")) ?? []
  ).length;

  if (count >= password.policy.min && count <= password.policy.max) {
    valid++;
  }
}

console.log(valid);
