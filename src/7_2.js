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

function parseInput(input) {
  return input.split('\n').map((line) => {
    const [hand, bidStr] = line.split(' ');
    return {
      hand,
      bid: parseInt(bidStr, 10),
      handType: getHandType(hand),
    };
  });
}

function getHandType(hand) {
  const wildCardNumber = countWildCards(hand, 'J');
  const fullHand = countCards(hand);
  let handType = determineHandType(fullHand);

  if (wildCardNumber > 0) {
    const handWithoutWildcard = countCards(hand.replace(/J/g, ''));
    handType = adjustHandTypeForWildcards(handType, wildCardNumber, handWithoutWildcard);
  }

  return handType;
}

function countWildCards(hand, wildCard) {
  return hand.split('').filter((card) => card === wildCard).length;
}

function countCards(hand) {
  return hand.split('').reduce((acc, card) => {
    acc[card] = (acc[card] || 0) + 1;
    return acc;
  }, {});
}

function determineHandType(cardCount) {
  const counts = Object.values(cardCount).sort((a, b) => b - a);

  switch (counts.join(',')) {
    case '5':
      return 'fiveOfAKind';
    case '4,1':
      return 'fourOfAKind';
    case '3,2':
      return 'fullHouse';
    case '3,1,1':
      return 'threeOfAKind';
    case '2,2,1':
      return 'twoPair';
    case '2,1,1,1':
      return 'onePair';
    default:
      return 'highCard';
  }
}

function adjustHandTypeForWildcards(handType, wildCardNumber, handWithoutWildcard) {
  const handWithoutWildcardLength = Object.keys(handWithoutWildcard).length;
  const handStrength = {
    highCard: 1,
    onePair: 2,
    twoPair: 3,
    threeOfAKind: 4,
    fullHouse: 5,
    fourOfAKind: 6,
    fiveOfAKind: 7,
  };

  switch (wildCardNumber) {
    case 1:
      if (handWithoutWildcardLength === 4)
        return findPropertyWithValue(handStrength, handStrength[handType] + 1);
      if (handWithoutWildcardLength === 3)
        return findPropertyWithValue(handStrength, handStrength[handType] + 2);
      if (handWithoutWildcardLength === 2)
        return findPropertyWithValue(handStrength, handStrength[handType] + 2);
      if (handWithoutWildcardLength === 1)
        return findPropertyWithValue(handStrength, handStrength[handType] + 1);
      break;
    case 2:
      if (handWithoutWildcardLength === 3)
        return findPropertyWithValue(handStrength, handStrength[handType] + 2);
      if (handWithoutWildcardLength === 2)
        return findPropertyWithValue(handStrength, handStrength[handType] + 3);
      if (handWithoutWildcardLength === 1)
        return findPropertyWithValue(handStrength, handStrength[handType] + 2);
      break;
    case 3:
      if (handWithoutWildcardLength === 2)
        return findPropertyWithValue(handStrength, handStrength[handType] + 2);
      if (handWithoutWildcardLength === 1)
        return findPropertyWithValue(handStrength, handStrength[handType] + 2);
      break;
    case 4:
      if (handWithoutWildcardLength === 1)
        return findPropertyWithValue(handStrength, handStrength[handType] + 1);
      if (handWithoutWildcardLength === 0)
        return findPropertyWithValue(handStrength, handStrength[handType]);
      break;
    case 5:
      return findPropertyWithValue(handStrength, handStrength[handType]);
  }

  return handType;
}

const sortHandsByStrength = (hands) => {
  return hands.sort((a, b) => {
    const typeComparison = handStrength[a.handType] - handStrength[b.handType];
    if (typeComparison !== 0) return typeComparison;
    return compareFn(a.hand, b.hand);
  });
};

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

function rankHands(sortedHands) {
  let handRank = 1;
  return sortedHands.map((hand) => ({ ...hand, rank: handRank++ }));
}

function calculateFinalScore(rankedHands) {
  return rankedHands.reduce((acc, hand) => acc + hand.rank * hand.bid, 0);
}

const parsedInput = parseInput(input);
const sortedHands = sortHandsByStrength(parsedInput);
const rankedHands = rankHands(sortedHands);
const finalResult = calculateFinalScore(rankedHands);

log(finalResult);
