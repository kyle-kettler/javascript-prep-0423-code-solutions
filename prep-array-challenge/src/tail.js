/* exported tail */
function tail(array) {
  const newArray = [];

  for (let index = 1; index <= array.length - 1; index++) {
    newArray.push(array[index]);
  }
  return newArray;
}
