const MAJOR_ARCANA = {
  FOOL: '🃏',
  MAGICIAN: '🧙',
  PRIESTESS: '🔮',
  EMPRESS: '🗽',
  EMPEROR: '👑',
  HIEROPHANT: '🎓',
  LOVERS: '💞',
  CHARIOT: '🛒',
  STRENGTH: '💪',
  HERMIT: '⛺️',
  WHEEL: '🛞',
  JUSTICE: '⚖️',
  HANGED: '🪢',
  DEATH: '💀',
  TEMPERANCE: '🍵',
  DEVIL: '😈',
  TOWER: '💥',
  STAR: '✨',
  MOON: '🌝',
  SUN: '🌞',
  JUDGMENT: '📯',
  WORLD: '🌍',
};

const SUITS = {
  SWORDS: '⚔️',
  CUPS: '🏆',
  WANDS: '🪄',
  PENTACLES: '🪙',
};

const VALUES = {
  ACE: '🅰️',
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: '🔟',
  PAGE: '🤴',
  KNIGHT: '🛡️',
  QUEEN: '👸',
  KING: '🫅',
};

const REVERSED = 'REVERSED';

/**
 * Parse a tarot card name and convert it to an emoji combination
 * @param {string} drawnCard the card name to parse
 * @returns the emoji combination for the card
 */
function cardNameToEmoji(drawnCard) {
  if (!drawnCard) return '❓';

  const upper = drawnCard.toUpperCase();
  const reversed = upper.includes(REVERSED);
  const cardName = upper.replace(REVERSED, '').trim();

  for (let arcana in MAJOR_ARCANA) {
    if (cardName.includes(arcana))
      return appendReversed(MAJOR_ARCANA[arcana], reversed);
  }

  const [upperValue, upperSuit] = cardName.split('OF');
  const [value, suit] = [VALUES[upperValue.trim()], SUITS[upperSuit.trim()]];

  return value && suit ? appendReversed(`${value}${suit}`, reversed) : '❓';
}

/**
 * Append the reverse emoji to the tarot string if the card is reversed
 * @param {string} emoji the string to append to
 * @param {boolean} reversed whether to append the reversed symbol or not
 * @returns the emoji string with or without the reversed symbol
 */
function appendReversed(emoji, reversed) {
  return reversed ? emoji + '🔃' : emoji;
}

module.exports = { cardNameToEmoji, appendReversed };
