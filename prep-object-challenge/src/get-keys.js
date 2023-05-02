/* exported getKeys */
function getKeys(object) {
  const array = [];
  for (const property in object) {
    array.push(property);
  }
  return array;
}
