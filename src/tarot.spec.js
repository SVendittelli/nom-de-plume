const { cardNameToEmoji } = require('./tarot');

const majorArcanaCases = [
  ['the fool', '🃏'],
  ['the magician', '🧙'],
  ['the priestess', '🔮'],
  ['the empress', '🗽'],
  ['the emperor', '👑'],
  ['the hierophant', '🎓'],
  ['the lovers', '💞'],
  ['the chariot', '🛒'],
  ['strength', '💪'],
  ['the hermit', '⛺️'],
  ['wheel of fortune', '🛞'],
  ['justice', '⚖️'],
  ['the hanged man', '🪢'],
  ['death', '💀'],
  ['temperance', '🍵'],
  ['the devil', '😈'],
  ['the tower', '💥'],
  ['the star', '✨'],
  ['the moon', '🌝'],
  ['the sun', '🌞'],
  ['judgment', '📯'],
  ['the world', '🌍'],
];

const suitCases = [
  ['swords', '⚔️'],
  ['cups', '🏆'],
  ['wands', '🪄'],
  ['pentacles', '🪙'],
];
const valueCases = [
  ['ace', '🅰️'],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6],
  [7, 7],
  [8, 8],
  [9, 9],
  [10, '🔟'],
  ['page', '🤴'],
  ['knight', '🛡️'],
  ['queen', '👸'],
  ['king', '🫅'],
];

describe('cardNameToEmoji', () => {
  describe('major arcana', () => {
    test.each(majorArcanaCases)('convert %p to %p', (message, expected) => {
      expect(cardNameToEmoji(message)).toEqual(expected);
    });
  });

  describe('minor arcana', () => {
    describe.each(suitCases)('%s', (suit, expectedSuit) => {
      test.each(valueCases)(
        `convert "%s of ${suit}" to "%s${expectedSuit}"`,
        (value, expectedValue) => {
          const message = `${value} of ${suit}`;
          expect(cardNameToEmoji(message)).toEqual(
            `${expectedValue}${expectedSuit}`
          );
        }
      );
    });
  });
});
