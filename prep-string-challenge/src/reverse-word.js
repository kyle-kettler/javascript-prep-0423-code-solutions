/* exported reverseWord */
function reverseWord(word) {
  const wordArray = [];
  const reverseArray = [];

  for (let i = 0; i < word.length; i++) {
    wordArray.push(word[i]);
  }

  for (let i = wordArray.length - 1; i >= 0; i--) {
    reverseArray.push(wordArray[i]);
  }

  return reverseArray.join('');
}
