'use strict';

/**
 * How passing arguments works: Value vs. Reference
 */

// const flight = 'LH24';
// const tony = {
//   name: 'Tony Falcone',
//   passport: 234567890,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 234567890) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, tony);
// console.log(flight);
// console.log(tony);

// be careful with changing an object reference in functions
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000000);
// };

// newPassport(tony);
// checkIn(flight, tony);

/**
 * Functions returning functions
 */
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Tony');
greeterHey('Ant');

greet('Hello')('Anthony');

/**
 * Functions returning functions challenge
 * Turn the above greet method into an arrow function
 */
const arrowGreet = greeting => name => console.log(`${greeting} ${name}`);

arrowGreet('Afternoon')('Miseyour');
