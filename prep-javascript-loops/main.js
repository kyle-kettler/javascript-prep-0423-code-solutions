// while loop 1
function whileLoop1() {
  const array = [];
  let i = 0;
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}

console.log('whileLoop1 output', whileLoop1());

// while loop 2
function whileLoop2() {
  const array = [];
  let i = 0;
  while (i < 20) {
    array.push(i);
    i += 2;
  }
  return array;
}

console.log('whileLoop2 output', whileLoop2());

// for loop 1
function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}

console.log('forLoop1 output', forLoop1());

// for loop 2
function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time till explosion ' + i + '!');
  }
}

forLoop2();

// for in loop 1
const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const array = [];
  for (const property in object) {
    array.push(property);
  }
  return array;
}

console.log('forInLoop1 output', forInLoop1(object));

// for in loop 2
function forInLoop2(object) {
  const array = [];
  for (const property in object) {
    array.push(object[property]);
  }
  return array;
}

console.log('forInLoop2 output', forInLoop2(object));
