import countHours from "./src/countHours";

const year: number = 2020;

const holidays: string[] = [
  "01/06",
  "01/07",
  "01/08",
  "02/29",
  "05/06",
  "04/01",
  "12/25",
];

const hours = countHours({ holidays, year });

console.log(`🚀 This year you will work ${hours} extra hours`);
