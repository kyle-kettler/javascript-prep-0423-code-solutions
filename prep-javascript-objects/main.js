const person = {
  firstName: 'Kyle',
  lastName: 'Kettler',
  hobby: 'Jiu Jitsu',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is: " + fullName);

person.job = 'Designer';
console.log("The person's current job is: " + person.job);

person['previousJob'] = 'Student';
console.log("The person's previous job is: " + person.previousJob);

console.log(person);
