'use strict';

// const bookings = [];
// const createBooking = function (
//   fightNum,
//   numPassengers = 1,
//   price = numPassengers * 199
// ) {
//   //ES5中给参数默认值的方法
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     fightNum,
//     numPassengers,
//     price,
//   };

//   bookings.push(booking);
//   console.log(bookings);
// };

// createBooking('LA224', 2);

//参数传递的工作方式：值传递 vs.引用传递
// const flight = 'AN780';
// const person = {
//   name: 'John Doe',
//   passport: 19950822,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + person.name;
//   if (person.passport === 19950822) {
//     console.log('Welcome aboard!');
//   } else {
//     console.log('Your passport is not valid');
//   }
// };

// const newPass = function (person) {
//   person.passport = 19950823;
//   return person;
// };

// console.log(newPass(person));

//高阶函数：接受其他函数作为参数或返回一个函数的函数
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

//这里是高阶函数
// const transformer = function (str, fn1, fn2) {
//   return `${fn1(fn2(str))}`;
// };

// transformer('JavaScript is awesome', upperFirstWord, oneWord);

// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// ['0', '1', '2'].forEach(high5);

//返回其他函数的函数
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };

// greet('Hi')('AXITEE');

// const person = age => country =>
//   console.log(`${age} years old, from ${country}`);

// person(25)('China');

//this关键字

const anaAir = {
  airline: 'ANA',
  iataCode: 'AN',
  bookings: [],
  book(fightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${fightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${fightNum}`,
      name: `${name}`,
    });
  },
};

const kumaAir = {
  airline: 'KUM',
  iataCode: 'KM',
  bookings: [],
};

const book = anaAir.book;

//call方法
// book.call(kumaAir, '456', 'KUMA');
// console.log(kumaAir);

// book.call(anaAir, '789', 'AXITEE');
// console.log(anaAir);

//apply方法
// const darkAir = {
//   airline: 'DARK',
//   iataCode: 'DK',
//   bookings: [],
// };

// const flightData = ['123', 'AXITEE'];

// book.call(darkAir, ...flightData);
// console.log(darkAir);

//bind方法
// const lightAir = {
//   airline: 'LIGHT',
//   iataCode: 'LT',
//   bookings: [],
// };

// const bookLI = book.bind(lightAir);
// bookLI('123', 'AXITEE');
// console.log(lightAir);

// const bookLI23 = book.bind(lightAir, 23);
// bookLI23('AXITEE');
// bookLI23('KUMA');

//利用bind方法结合事件监听器
// kumaAir.planes = 300;
// kumaAir.buyPlane = function () {
//   this.planes++;
//   console.log(this.planes);
//   console.log(this);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', kumaAir.buyPlane.bind(kumaAir));

//部分应用
// const addTax = (rate, value) => value + value * rate;

// const addJP = addTax.bind(null, 0.1);

// console.log(addJP(200));

// const addUS = function (value) {
//   return function (rate) {
//     return value + value * rate;
//   };
// };

// const result = addUS(200);
// console.log(result(0.1));

//编程挑战 #1：投票应用（Poll App）

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     // TODO
//     const input = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}`)
//     );
//     typeof input === 'number' && input < this.answers.length && input >= 0
//       ? this.answers[input]++
//       : console.log('Invalid option');
//     this.displayResults('array');
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     // TODO
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const newarr = {
//   answers: [5, 2, 3],
// };

// poll.displayResults.call(newarr, 'string');

//立即调用的函数

// (function () {
//   console.log('This will never run again');
// })();

//闭包
// const secureBooking = function () {
//   let passengersCount = 0;
//   return function () {
//     passengersCount++;
//     console.log(`${passengersCount} passengers`);
//   };
// };

// const booker = secureBooking();
// console.dir(booker);

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// h();
// f();
// g();
// f();

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(
//       `We are now boarding all ${n} passengers, each with ${perGroup} to board`
//     );
//   }, wait * 1000);
// };

//编程挑战 #2：
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
