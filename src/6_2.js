// https://adventofcode.com/2023/day/6

import { log } from './util/helpers.js';

let input = `Time:        53     89     76     98
Distance:   313   1090   1214   1201`;

input = input.split('\n');

input = input.map((line) => {
  const numberRegex = /\d+/g;
  line = line.match(numberRegex);
  return line;
});
const [timeArr, distanceArr] = input;
const time = +timeArr.join('');
const distance = +distanceArr.join('');

let differentWaysToWin = [];

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

differentWaysToWin = differentWaysToWin.reduce((acc, curr) => acc * curr);

log(differentWaysToWin);
