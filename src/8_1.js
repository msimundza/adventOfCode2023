import { log } from './util/helpers.js';

const input = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

function parseInput(input) {
  const [instructions, , ...nodes] = input.split('\n');
  const parsedNodes = nodes.reduce((acc, curr) => {
    const regex = new RegExp(/\b([A-Z]{3})\b/g);
    const [first, second, third] = curr.match(regex);

    acc = {
      ...acc,
      [first]: { L: second, R: third },
    };

    return acc;
  }, {});

  return { instructions: instructions.split(''), nodes: parsedNodes };
}

const { instructions, nodes } = parseInput(input);
log(nodes);

let index = 0;
let steps = 0;
let currentNode = 'AAA';
while (true) {
  const instruction = instructions[index];
  console.log(`Element at index ${index}: ${instructions[index]}`);
  index++;

  currentNode = nodes[currentNode][instruction];

  steps++;
  if (currentNode === 'ZZZ') {
    log(steps);
    break;
  }

  if (index >= instructions.length) {
    index = 0;
  }
}
