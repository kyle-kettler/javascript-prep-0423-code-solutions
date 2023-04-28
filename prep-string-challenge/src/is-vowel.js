/* exported isVowel */
function isVowel(char) {
  const upperCase = char.toUpperCase();
  if (
    upperCase === 'A' ||
    upperCase === 'E' ||
    upperCase === 'I' ||
    upperCase === 'O' ||
    upperCase === 'U'
  ) {
    return true;
  } else {
    return false;
  }
}
