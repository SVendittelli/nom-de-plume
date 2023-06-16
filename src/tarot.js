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

/**
 * Parse a tarot card name and convert it to an emoji combination
 * @param {string} cardName the card name to parse
 * @returns the emoji combination for the card
 */
function cardNameToEmoji(cardName) {
  if (!cardName) return '❓';

  const upper = cardName.toUpperCase();

  for (let arcana in MAJOR_ARCANA) {
    if (upper.includes(arcana)) return MAJOR_ARCANA[arcana];
  }

  const [upperValue, upperSuit] = upper.split(' OF ');
  const [value, suit] = [VALUES[upperValue], SUITS[upperSuit]];

  return value && suit ? `${value}${suit}` : '❓';
}

module.exports = { cardNameToEmoji };
