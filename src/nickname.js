/**
 * Replace the content a pair of square brackets at the end of a nickname.
 * @param {string} nickname the nickname to replace the bracketed content of
 * @param {string} replacement the new content
 * @returns the nickname with replacement
 */
function replaceBrackets(nickname, replacement) {
  return nickname.replace(/\[.*\]/, `[${replacement}]`);
}

/**
 * Replace the content a pair of square brackets at the end of a nickname. If
 * there is not a pair of brackets at the end, then append them with the
 * content.
 * @param {string} nickname the nickname to replace the bracketed content of
 * @param {string} replacement the new content
 * @returns the nickname with replacement
 */
function replaceOrAppendBrackets(nickname, replacement) {
  let newNickname = nickname;
  if (!/\[.*\]/.test(newNickname)) {
    newNickname = newNickname.concat(' []');
  }

  return replaceBrackets(newNickname, replacement);
}

module.exports = {
  replaceBrackets,
  replaceOrAppendBrackets,
};
