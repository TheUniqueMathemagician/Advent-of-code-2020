import fs from "fs/promises";

const subset_sum = async () => {
  let input: Array<number>;
  try {
    const file: string = await fs.readFile("./input.txt", {
      encoding: "utf-8"
    });
    input = file?.match(/[0-9]+/g)?.map((v) => +v) ?? [];
  } catch (_) {
    return;
  }

  stop: for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - i; j++) {
      if (input[i] + input[i + j] === 2020) {
        console.log(
          input[i],
          " + ",
          input[i + j],
          " = ",
          input[i] + input[i + j]
        );
        console.log(
          input[i],
          " * ",
          input[i + j],
          " = ",
          input[i] * input[i + j]
        );
        break stop;
      }
    }
  }
};

subset_sum();
