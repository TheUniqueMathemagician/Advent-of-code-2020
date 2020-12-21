import * as fs from "fs";

let input: string;
try {
  input = fs.readFileSync("../../Inputs/Day 5.txt", { encoding: "utf-8" });
} catch (_) {
  process.exit(-1);
}

const BSPs: Array<string> | null = input.match(/.+/g);

interface SeatPosition {
  row: number;
  column: number;
}

const seat_positions: Array<SeatPosition> =
  BSPs?.map((BSP) => {
    const e = /([FB]{7})([LR]{3})/.exec(BSP);
    const row: number = parseInt(
      e?.[1].replace(/F/g, "0").replace(/B/g, "1") ?? "",
      2
    );
    const column: number = parseInt(
      e?.[2].replace(/L/g, "0").replace(/R/g, "1") ?? "",
      2
    );

    return {
      row,
      column
    } as SeatPosition;
  }) ?? [];

let seats: Array<number> = seat_positions
  .map(({ row, column }) => row * 8 + column)
  .sort((a, b) => a - b);

// Part 1
console.log(seats[seats.length - 1]);

// Part 2
let seat = seats[0];
for (let i = 1; i < seats.length; i++) {
  seat++;
  if (seats[i] != seat) {
    console.log(seat);
    break;
  }
}
