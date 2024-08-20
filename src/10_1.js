import { log } from './util/helpers.js';

let input = `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`;

input = input.split('\n');
let start;
let counter = 0;

function getStartingPositions(startingPoint) {
  let startPositions = [];
  const [i, j] = startingPoint;

  const positions = {
    up: [i - 1, j],
    down: [i + 1, j],
    left: [i, j - 1],
    right: [i, j + 1],
  };
  const pipeUp = getPipeFromCoordinates(i - 1, j);
  const pipeDown = getPipeFromCoordinates(i + 1, j);
  const pipeLeft = getPipeFromCoordinates(i, j - 1);
  const pipeRight = getPipeFromCoordinates(i, j + 1);

  if (pipeUp === '|' || pipeUp === '7' || pipeUp === 'F') {
    startPositions.push({ position: positions.up, direction: 'up' });
  }
  if (pipeDown === '|' || pipeDown === 'L' || pipeDown === 'J') {
    startPositions.push({ position: positions.down, direction: 'down' });
  }
  if (pipeLeft === 'F' || pipeLeft === 'L' || pipeLeft === '-') {
    startPositions.push({ position: positions.left, direction: 'left' });
  }
  if (pipeRight === '7' || pipeRight === 'J' || pipeRight === '-') {
    startPositions.push({ position: positions.right, direction: 'right' });
  }

  return startPositions;
}

function isEqual(point1, point2) {
  return point1[0] === point2[0] && point1[1] === point2[1];
}

function follow({ position, direction }) {
  const [i, j] = position;
  const pipe = getPipeFromCoordinates(i, j);

  const moves = {
    down: {
      '|': { position: [i + 1, j], direction: 'down' },
      L: { position: [i, j + 1], direction: 'right' },
      J: { position: [i, j - 1], direction: 'left' },
    },
    up: {
      '|': { position: [i - 1, j], direction: 'up' },
      F: { position: [i, j + 1], direction: 'right' },
      7: { position: [i, j - 1], direction: 'left' },
    },
    left: {
      '-': { position: [i, j - 1], direction: 'left' },
      F: { position: [i + 1, j], direction: 'down' },
      L: { position: [i - 1, j], direction: 'up' },
    },
    right: {
      '-': { position: [i, j + 1], direction: 'right' },
      7: { position: [i + 1, j], direction: 'down' },
      J: { position: [i - 1, j], direction: 'up' },
    },
  };

  return moves[direction][pipe];
}

function getPipeFromCoordinates(i, j) {
  return input[i][j];
}

for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[i].length; j += 1) {
    if (input[i][j] === 'S') {
      start = [i, j];
    }
  }
  if (start) break;
}

let startingPositions = getStartingPositions(start);
let currentPosition = { ...startingPositions[0] };

while (!isEqual(start, currentPosition.position)) {
  currentPosition = follow(currentPosition);
  counter++;
}
log(Math.ceil(counter / 2));
