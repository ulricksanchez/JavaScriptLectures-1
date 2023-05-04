//  CHALLENGE 1
//Challenge 1
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: `${person.firstName} ${person.lastName}`,
    email: person.email,
  }));
console.log(youngPeople);

//  CHALLENGE 2

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveNumbers = numbers.filter(function (number) {
  return number > 0;
});
console.log(positiveNumbers);
const positiveSum = positiveNumbers.reduce(function (
  accumulator,
  currentValue
) {
  return accumulator + currentValue;
},
0);

console.log(positiveSum);

//  CHALLENGE 3

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);

// //challenge 1
// const youngPeople = people
//   .filter((person) => person.age <= 25)
//   .map((person) => ({
//     name: person.firstName + ' ' + person.lastName,
//     email: person.email,
//   }));

// console.log(youngPeople);

// //challenge 2
// const numbers = [2, -30, 50, 20, -12, -9, 7];

// const positiveSum = numbers
//   .filter((number) => number > 0)
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(positiveSum);

// //challenge 3
// const words = ['coder', 'programmer', 'developer'];

// const capitalizedWords = words.map((word) => {
//   return word[0].toUpperCase() + word.slice(1, word.length);
// });

// console.log(capitalizedWords);
