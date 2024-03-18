let input = [
  '467..114..',
  '...*......',
  '..35..633.',
  '......#...',
  '617*......',
  '.....+.58.',
  '..592.....',
  '......755.',
  '...$.*....',
  '.664.598..',
];

let sum = 0;

const regexp = /\d+/g;

for (let i = 0; i < input.length; i++) {
  let str = input[i];
  const matches = [...str.matchAll(regexp)].map((m) => {
    return {
      value: m[0],
      start: m.index,
      end: m.index + m[0].length - 1,
      row: i,
      col: m.index,
    };
  });

  for (let j = 0; j < matches.length; j++) {
    const match = matches[j];
    console.log(match);
    match.value.split('').forEach((v) => {
      console.log(input[match.row][match.col]);
    });
  }
}

console.log(sum);
