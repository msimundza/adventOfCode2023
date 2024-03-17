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
let currentNumber = '';

const dfs = (i, j, isRight) => {
  if (i < 0 || i >= input.length) {
    return;
  }
  let row = input[i].split('');

  if (j < 0 || j >= row.length || row[j] === '.') {
    return;
  }

  currentNumber += row[j];
  row[j] = '.';

  input[i] = row.join('');

  console.log(input[i][j]);
  dfs(i - 1, j); // up
  dfs(i + 1, j); // down
  dfs(i, j - 1); // left
  dfs(i, j + 1, true); // right
  dfs(i - 1, j - 1); // up left
  dfs(i - 1, j + 1); // up right
  dfs(i + 1, j - 1); // down left
  dfs(i + 1, j + 1); // down right
};

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (Number.isInteger(+input[i][j])) {
      dfs(i, j);
    }
  }
}

console.log(sum);
