// https://adventofcode.com/2023/day/5
// example input, should give 46 as smallest location
let input = `.seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`;

function extractSeedRanges(seeds) {
  seeds = seeds.split(':')[1].trim().split(' ').map(Number);

  return seeds.reduce((acc, curr, i) => {
    if (i % 2 === 0) {
      acc.push([curr, curr + seeds[i + 1]]);
    }

    return acc;
  }, []);
}

input = input.split('\n\n');
let seeds = extractSeedRanges(input.shift());
input = input.reduce((acc, curr) => {
  let splitCurr = curr.split(':');
  let title = splitCurr[0].split(' ')[0];
  let ranges = splitCurr[1]
    .trim()
    .split('\n')
    .reduce((prev, range) => {
      const [destination, source, rangeLength] = range.split(' ').map(Number);
      prev.push({ destination, source, rangeLength });

      return prev;
    }, []);

  acc[title] = ranges;

  return acc;
}, {});
let mappedRanges;
for (const map in input) {
  mappedRanges = [];
  const range = input[map];

  while (seeds.length > 0) {
    const [start, end] = seeds.pop();

    find: {
      for (const { destination, source, rangeLength } of range) {
        let overlapStart = Math.max(start, source);
        let overlapEnd = Math.min(end, source + rangeLength);

        if (overlapStart < overlapEnd) {
          mappedRanges.push([
            overlapStart - source + destination,
            overlapEnd - source + destination,
          ]);

          if (overlapStart > start) {
            seeds.push([start, overlapStart]);
          }

          if (end > overlapEnd) {
            seeds.push([overlapEnd, end]);
          }
          break find;
        }
      }
      mappedRanges.push([start, end]);
    }
  }
  seeds = mappedRanges;
}

console.log(Math.min(...mappedRanges.flat()));
