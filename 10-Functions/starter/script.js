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

anaAir.book('123', 'KUMA');

const kumaAir = {
  airline: 'KUM',
  iataCode: 'KM',
  bookings: [],
};

const book = anaAir.book;
