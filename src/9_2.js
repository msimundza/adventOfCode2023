import { log } from './util/helpers.js';

let input = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

const numberRegex = /-?\d+/g;
let result = [];

input = input.split('\n').map((history) => history.match(numberRegex).map(Number));
for (const history of input) {
  const lastInHistory = [];
  const currentDiff = [...history];

  let index = 0;
  let moduloValue = currentDiff.length;

  while (!currentDiff.every((item) => item === 0)) {
    let element = currentDiff.shift();
    const nextElement = currentDiff[0];

    if ((index + 1) % moduloValue === 0) {
      lastInHistory.push(nextElement);
      moduloValue -= 1;
      index = -1;
    } else {
      currentDiff.push(nextElement - element);
    }
    index++;
  }
  lastInHistory.unshift(history[0]);
  result.push(lastInHistory.reduceRight((acc, curr) => curr - acc, 0));
}

log(result.reduce((acc, curr) => acc + curr, 0));
