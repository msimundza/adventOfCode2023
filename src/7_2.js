import { findPropertyWithValue, log } from './util/helpers.js';

let input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

const cards = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J'];
const handStrength = {
  highCard: 1,
  onePair: 2,
  twoPair: 3,
  threeOfAKind: 4,
  fullHouse: 5,
  fourOfAKind: 6,
  fiveOfAKind: 7,
};

function getHandType(hand) {
  const wildCardNumber = hand.split('').filter((a) => a === 'J').length;
  const fullHand = hand.split('').reduce((acc, prev) => {
    if (!acc[prev]) {
      acc[prev] = 1;
    } else {
      acc[prev] += 1;
    }

    return acc;
  }, {});

  let type = {
    fiveOfAKind: false,
    fourOfAKind: false,
    fullHouse: false,
    threeOfAKind: false,
    twoPair: false,
    onePair: false,
    highCard: false,
  };

  const handKeysLength = Object.keys(fullHand).length;

  for (const card in fullHand) {
    switch (fullHand[card]) {
      case 2:
        if (handKeysLength === 3) {
          type.twoPair = true;
        } else {
          type.onePair = true;
        }
        break;
      case 3:
        if (handKeysLength === 3) {
          type.threeOfAKind = true;
        } else {
          type.fullHouse = true;
        }
        break;
      case 4:
        type.fourOfAKind = true;
        break;
      case 5:
        type.fiveOfAKind = true;
        break;

      default:
        type.highCard = true;
        break;
    }
  }

  type = Object.entries(type);

  let handType = 'highCard';

  for (const [name, value] of type) {
    if (value) {
      handType = name;
      break;
    }
  }

  if (wildCardNumber) {
    const handWithoutWildcard = hand
      .split('')
      .filter((h) => h !== 'J')
      .reduce((acc, prev) => {
        if (!acc[prev]) {
          acc[prev] = 1;
        } else {
          acc[prev] += 1;
        }

        return acc;
      }, {});
    const handWithoutWildcardLength = Object.keys(handWithoutWildcard).length;

    switch (wildCardNumber) {
      case 1:
        if (handWithoutWildcardLength === 4) {
          handType = findPropertyWithValue(handStrength, handStrength[handType] + 1);
          return handType;
        } else if (handWithoutWildcardLength === 3) {
          handType = findPropertyWithValue(handStrength, handStrength[handType] + 2);
          return handType;
        } else if (handWithoutWildcardLength === 2 && handType === 'threeOfAKind') {
          handType = findPropertyWithValue(handStrength, handStrength[handType] + 2);
          return handType;
        } else if (handWithoutWildcardLength === 2) {
          handType = findPropertyWithValue(handStrength, handStrength[handType] + 2);
          return handType;
        } else if (handWithoutWildcardLength === 1) {
          handType = findPropertyWithValue(handStrength, handStrength[handType] + 1);
          return handType;
        }
        break;

      case 2:
        if (handWithoutWildcardLength === 3) {
          handType = findPropertyWithValue(handStrength, handStrength[handType] + 2);
          return handType;
        } else if (handWithoutWildcardLength === 2) {
          handType = findPropertyWithValue(handStrength, handStrength[handType] + 3);
          return handType;
        } else if (handWithoutWildcardLength === 1) {
          handType = findPropertyWithValue(handStrength, handStrength[handType] + 2);
          return handType;
        }
        break;

      case 3:
        if (handWithoutWildcardLength === 2) {
          handType = findPropertyWithValue(handStrength, handStrength[handType] + 2);
          return handType;
        } else if (handWithoutWildcardLength === 1) {
          handType = findPropertyWithValue(handStrength, handStrength[handType] + 2);
          return handType;
        }
        break;

      case 4:
        if (handWithoutWildcardLength === 1) {
          handType = findPropertyWithValue(handStrength, handStrength[handType] + 1);
          return handType;
        } else if (handWithoutWildcardLength === 0) {
          handType = findPropertyWithValue(handStrength, handStrength[handType]);
          return handType;
        }
        break;
      case 5:
        handType = findPropertyWithValue(handStrength, handStrength[handType]);
        return handType;
    }
  } else {
    return handType;
  }
}

input = input.split('\n').reduce((acc, curr) => {
  const [hand, bid] = curr.split(' ');
  const handType = getHandType(hand);

  acc.push({ hand, bid, handType });
  return acc;
}, []);

input.sort((a, b) => handStrength[a.handType] - handStrength[b.handType]);
let result = input.reduce((acc, curr) => {
  if (!(curr.handType in acc)) {
    acc[curr.handType] = [
      {
        hand: curr.hand,
        bid: curr.bid,
      },
    ];
  } else {
    acc[curr.handType].push({
      hand: curr.hand,
      bid: curr.bid,
    });
  }
  return acc;
}, {});

for (const handType in result) {
  result[handType].sort((a, b) => compareFn(a.hand, b.hand));
}

function compareFn(a, b) {
  for (let i = 0; i < 5; i++) {
    const cardOneStrength = cards.indexOf(a[i]);
    const cardTwoStrength = cards.indexOf(b[i]);

    if (cardOneStrength > cardTwoStrength) {
      return -1;
    } else if (cardOneStrength < cardTwoStrength) {
      return 1;
    }
  }

  return 0;
}

let handRank = 1;

const finalResult = Object.values(result)
  .reduce((acc, curr) => {
    acc = acc.concat(curr);
    return acc;
  }, [])
  .map((hand) => {
    hand['rank'] = handRank++;
    return hand;
  })
  .reduce((acc, curr) => {
    acc += curr.rank * curr.bid;
    return acc;
  }, 0);
log(finalResult);
