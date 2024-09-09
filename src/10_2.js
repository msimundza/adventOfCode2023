import { log } from './util/helpers.js';

function newPosition(direction, point) {
  return {
    direction,
    point: pointByDirection(direction, point),
  };
}
function pointByDirection(direction, point) {
  return { top, down, right, left }[direction](point);
}

function getNextPosition(val, position) {
  const { direction, point } = position;

  if (['-', '|'].includes(val)) {
    return newPosition(direction, point);
  }

  if (direction === 'top') {
    if (val === 'F') {
      return newPosition('right', point);
    }
    if (val === '7') {
      return newPosition('left', point);
    }
  }

  if (direction === 'down') {
    if (val === 'L') {
      return newPosition('right', point);
    }
    if (val === 'J') {
      return newPosition('left', point);
    }
  }

  if (direction === 'right') {
    if (val === 'J') {
      return newPosition('top', point);
    }
    if (val === '7') {
      return newPosition('down', point);
    }
  }

  if (direction === 'left') {
    if (val === 'F') {
      return newPosition('down', point);
    }
    if (val === 'L') {
      return newPosition('top', point);
    }
  }

  throw `unhandled next position (direction: ${direction}, val: ${val})`;
}

function top([y, x]) {
  return [y - 1, x];
}

function down([y, x]) {
  return [y + 1, x];
}

function right([y, x]) {
  return [y, x + 1];
}

function left([y, x]) {
  return [y, x - 1];
}

function areEqual([ya, xa], [yb, xb]) {
  return ya === yb && xa === xb;
}

function getStartingPositions(plan, startingPoint) {
  const positions = [];
  const topPoint = top(startingPoint);
  const bottomPoint = down(startingPoint);
  const rightPoint = right(startingPoint);
  const leftPoint = left(startingPoint);

  if (startingPoint[0] > 0 && ['|', 'F', '7'].includes(getVal(plan, topPoint))) {
    positions.push({
      direction: 'top',
      point: topPoint,
    });
  }

  if (startingPoint[0] <= plan.length - 1 && ['|', 'L', 'J'].includes(getVal(plan, bottomPoint))) {
    positions.push({
      direction: 'down',
      point: bottomPoint,
    });
  }

  if (
    startingPoint[1] <= plan[0].length - 1 &&
    ['-', '7', 'J'].includes(getVal(plan, rightPoint))
  ) {
    positions.push({
      direction: 'right',
      point: rightPoint,
    });
  }

  if (startingPoint[1] > 0 && ['-', 'F', 'L'].includes(getVal(plan, leftPoint))) {
    positions.push({
      direction: 'left',
      point: leftPoint,
    });
  }

  return positions;
}

function getVal(plan, [y, x]) {
  return plan[y][x];
}
function getStartingPoint() {
  for (let y = 0; y < plan.length; y++) {
    for (let x = 0; x < plan[y].length; x++) {
      if (plan[y][x] === 'S') {
        return [y, x];
      }
    }
  }
  throw 'no starting point';
}

function getLoopData() {
  const startingPoint = getStartingPoint(plan);
  const vertices = [startingPoint];

  let boundaryPointsCount = 1;
  let currentPosition = getStartingPositions(plan, startingPoint)[0];

  while (!areEqual(currentPosition.point, startingPoint)) {
    const val = getVal(plan, currentPosition.point);
    if (['F', '7', 'L', 'J'].includes(val)) {
      vertices.push(currentPosition.point);
    }
    currentPosition = getNextPosition(val, currentPosition);
    boundaryPointsCount++;
  }

  return { vertices, boundaryPointsCount };
}

function solvePart2(plan) {
  // boundaryPointsCount == part1Answer * 2
  const { vertices, boundaryPointsCount } = getLoopData(plan);
  const loopArea = getAreaUsingShoelaceFormula(vertices);

  // interiorPointsCount
  return loopArea - boundaryPointsCount / 2 + 1;
}

function getAreaUsingShoelaceFormula(vertices) {
  let area = 0;

  for (let i = 0; i < vertices.length; i++) {
    const nextIndex = (i + 1) % vertices.length;
    const [currentY, currentX] = vertices[i];
    const [nextY, nextX] = vertices[nextIndex];
    area += currentX * nextY - currentY * nextX;
  }

  area = Math.abs(area) / 2;

  return area;
}

let input = `...........
.S-------7.
.|F-----7|.
.||.....||.
.||.....||.
.|L-7.F-J|.
.|..|.|..|.
.L--J.L--J.
...........`;

input = input.split('\n');

const plan = input.map((line) => line.split(''));

log(solvePart2(plan));
