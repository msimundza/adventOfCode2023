// https://adventofcode.com/2023/day/6

import { log } from './util/helpers.js';

let input = `Time:      7  15   30
Distance:  9  40  200`;

input = input.split('\n').map((line) => {
  const numberRegex = /\d+/g;
  return line.match(numberRegex);
});
const [time, distance] = input;
let timeDistancePairs = time.map((time, i) => [
  Number(time),
  Number(distance[i]),
]);

let differentWaysToWin = [];

for (const [time, distance] of timeDistancePairs) {
  let counter = 0;
  for (let i = 1; i < time; i++) {
    let holdTime = i;
    let travelTime = time - i;
    let newDistance = holdTime * travelTime;

    if (newDistance > distance) {
      counter++;
    }
  }
  differentWaysToWin.push(counter);
}

differentWaysToWin = differentWaysToWin.reduce((acc, curr) => acc * curr);

log(differentWaysToWin);
