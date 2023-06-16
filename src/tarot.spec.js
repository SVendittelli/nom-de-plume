const { cardNameToEmoji, appendReversed } = require('./tarot');

const directionCases = [
  ['upright', '', ''],
  ['reversed', ' reversed', '🔃'],
];

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
  describe.each(directionCases)('%s', (_, appendix, expectedAppendix) => {
    describe('major arcana', () => {
      test.each(majorArcanaCases)(
        `should convert "%s${appendix}" to %p`,
        (message, expected) => {
          expect(cardNameToEmoji(message + appendix)).toStrictEqual(
            expected + expectedAppendix
          );
        }
      );
    });

    describe('minor arcana', () => {
      describe.each(suitCases)('%s', (suit, expectedSuit) => {
        test.each(valueCases)(
          `should convert "%s of ${suit}${appendix}" to "%s${expectedSuit}${expectedAppendix}"`,
          (value, expectedValue) => {
            const message = `${value} of ${suit}${appendix}`;
            expect(cardNameToEmoji(message)).toStrictEqual(
              `${expectedValue}${expectedSuit}${expectedAppendix}`
            );
          }
        );
      });
    });
  });
});

describe('appendReversed', () => {
  test('should not append anything', () => {
    const expected = 'test';
    const actual = appendReversed('test', false);
    expect(actual).toStrictEqual(expected);
  });

  test('should append reversed emoji', () => {
    const expected = 'test🔃';
    const actual = appendReversed('test', true);
    expect(actual).toStrictEqual(expected);
  });
});
