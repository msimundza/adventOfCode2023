import { log } from './util/helpers.js';

let input = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`;

const universeExpansionCoefficient = 1000000;
input = input.split('\n').map((row) => row.split(''));

/**
 * Extracts the coordinates of galaxies ('#') from a 2D grid input.
 *
 * @param {string[][]} input - A 2D array of strings representing the universe,
 * where each string is a character in the row.
 *
 * @returns {Record<number, [number, number]>} An object where each key is a unique identifier
 * for a galaxy, and each value is an array containing the coordinates [rowIndex, colIndex].
 */
function extractGalaxyCoordinates(input) {
  let parsedInput = {};
  let galaxyCounter = 1;

  input.forEach((row, rowIndex) => {
    row.forEach((char, colIndex) => {
      if (char === '#') {
        parsedInput[galaxyCounter] = [rowIndex, colIndex];
        galaxyCounter++;
      }
    });
  });

  return parsedInput;
}

/**
 * Finds rows and columns in a 2D grid that do not contain any galaxies ('#').
 *
 * @param {string[][]} input - A 2D array of strings representing the universe,
 * where each string is a character in the row.
 * @returns {{ noGalaxyRows: number[], noGalaxyColumns: number[] }} An object with two arrays,
 * one for row indices and another for column indices that do not contain galaxies.
 */
function findNoGalaxyRowsAndColumns(input) {
  const noGalaxyRows = [];
  const noGalaxyColumns = [];

  // Detect rows with no galaxies
  for (let i = 0; i < input.length; i++) {
    const row = input[i];
    const isGalaxyInARow = row.includes('#'); // Checks if there's a '#' in the row
    if (!isGalaxyInARow) {
      noGalaxyRows.push(i);
    }
  }

  // Detect columns with no galaxies
  const numCols = input[0].length; // Assuming all rows have the same number of columns
  for (let j = 0; j < numCols; j++) {
    let hasGalaxyInCol = false;

    for (let i = 0; i < input.length; i++) {
      if (input[i][j] === '#') {
        hasGalaxyInCol = true;
        break;
      }
    }

    if (!hasGalaxyInCol) {
      noGalaxyColumns.push(j);
    }
  }

  return { noGalaxyColumns, noGalaxyRows };
}

/**
 * Expands a 2D grid (universe) by inserting new rows and columns at specified indices.
 *
 * @param {string[][]} universe - The 2D array representing the grid, where each element is a character in the grid.
 * @param {Object} params - An object containing arrays of row and column indices to insert new rows and columns.
 * @param {number[]} params.noGalaxyColumns - An array of column indices where new columns ('.') should be inserted.
 * @param {number[]} params.noGalaxyRows - An array of row indices where new rows ('.') should be inserted.
 *
 * @returns {string[][]} A new 2D array representing the expanded grid with additional rows and columns.
 */
function expand(universe, { noGalaxyColumns: cols, noGalaxyRows: rows }) {
  const newUniverse = universe.map((row) => [...row]);
  const rowLength = newUniverse[0].length;

  // Sort rows in descending order to avoid issues with shifting indices
  const sortedRows = [...new Set(rows)].sort((a, b) => b - a);

  sortedRows.forEach((index) => {
    const newRow = new Array(rowLength).fill(universeExpansionCoefficient);
    newUniverse.splice(index, 1, newRow);
  });

  // Sort cols in descending order to avoid issues with shifting indices
  const sortedCols = [...new Set(cols)].sort((a, b) => b - a);

  sortedCols.forEach((colIndex) => {
    newUniverse.forEach((row) => {
      row.splice(colIndex, 1, universeExpansionCoefficient); // Insert column in each row
    });
  });

  return newUniverse;
}

/**
 * Calculates the Manhattan distance between two points in a 2D grid.
 *
 * @param {[number, number]} point1 - The coordinates of the first point as a tuple [x1, y1].
 * @param {[number, number]} point2 - The coordinates of the second point as a tuple [x2, y2].
 *
 * @returns {number} The Manhattan distance between the two points.
 */
function calculateDistance([x1, y1], [x2, y2]) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

/**
 * Counts the number of rows and columns between two coordinates that contain no galaxies.
 *
 * @param {[number, number]} coord1 - The coordinates of the first point [x1, y1].
 * @param {[number, number]} coord2 - The coordinates of the second point [x2, y2].
 * @param {Object} params - Contains arrays of row and column indices with no galaxies.
 * @param {number[]} params.noGalaxyRows - The array of row indices with no galaxies.
 * @param {number[]} params.noGalaxyColumns - The array of column indices with no galaxies.
 *
 * @returns {number} The number of empty rows and columns between the two coordinates.
 */
function findNumberOfEmptyRowsAndColumnsBetweenCoordinates(
  [x1, y1],
  [x2, y2],
  { noGalaxyRows, noGalaxyColumns }
) {
  let counter = 0;

  // Count columns between y1 and y2 without galaxies
  noGalaxyColumns.forEach((noGalaxyColumn) => {
    if (
      (y1 < noGalaxyColumn && noGalaxyColumn < y2) ||
      (y2 < noGalaxyColumn && noGalaxyColumn < y1)
    ) {
      counter++;
    }
  });

  // Count rows between x1 and x2 without galaxies
  noGalaxyRows.forEach((noGalaxyRow) => {
    if ((x1 < noGalaxyRow && noGalaxyRow < x2) || (x2 < noGalaxyRow && noGalaxyRow < x1)) {
      counter++;
    }
  });

  return counter;
}

/**
 * Calculates the distances between all unique pairs of galaxy coordinates, considering empty rows and columns.
 *
 * @param {Record<string, [number, number]>} coordinates - An object where each key is a unique identifier
 * and each value is an array containing the coordinates [x, y].
 * @param {{ noGalaxyRows: number[], noGalaxyColumns: number[] }} noGalaxiesRowsAndColumns - An object with arrays of row/column indices without galaxies.
 *
 * @returns {Record<string, number>} An object where each key is a unique combination of coordinate identifiers,
 * and each value is the calculated distance between those coordinates, including the impact of empty rows/columns.
 */
function findAllDistances(coordinates, noGalaxiesRowsAndColumns) {
  let distances = {};

  for (const [key1, coordinate1] of Object.entries(coordinates)) {
    for (const [key2, coordinate2] of Object.entries(coordinates)) {
      if (key1 === key2) {
        continue;
      }

      const sortedKey = [key1, key2].sort().join('-'); // Create a unique key
      if (!(sortedKey in distances)) {
        const numberOfEmptyRowsColumnsBetweenCoordinates =
          findNumberOfEmptyRowsAndColumnsBetweenCoordinates(
            coordinate1,
            coordinate2,
            noGalaxiesRowsAndColumns
          );
        distances[sortedKey] =
          calculateDistance(coordinate1, coordinate2) +
          numberOfEmptyRowsColumnsBetweenCoordinates * universeExpansionCoefficient -
          numberOfEmptyRowsColumnsBetweenCoordinates;
      }
    }
  }
  return distances;
}

/**
 * Sums all the values in an object containing distances.
 *
 * @param {Record<string, number>} distances - An object where each key is a string representing a unique pair of coordinates,
 * and each value is the distance (number) between those coordinates.
 *
 * @returns {number} The sum of all distance values in the object.
 */
function sum(distances) {
  return Object.values(distances).reduce((acc, curr) => acc + curr, 0);
}

const noGalaxyRowsAndColumns = findNoGalaxyRowsAndColumns(input);
const expandedUniverse = expand(input, noGalaxyRowsAndColumns);
const galaxiesCoordinates = extractGalaxyCoordinates(expandedUniverse);
const distances = findAllDistances(galaxiesCoordinates, noGalaxyRowsAndColumns);
const result = sum(distances);

log(result);
