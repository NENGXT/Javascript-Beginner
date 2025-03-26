'use strict';
// //创建一个用来接收出生年龄的函数
// function calcAge(birthYear) {
//   const age = new Date().getFullYear() - birthYear;

//   function printAGE() {
//     let output = `${firstName}.You are ${age} years old`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 2000) {
//       var millennial = true;
//       const str = `You are a millennial`;
//       console.log(str);

//       //创造同名变量在子结构中
//       const firstName = 'John';
//       output = `New output`;

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millennial);
//     // add(2, 3);
//     console.log(output);
//   }

//   printAGE();
//   return age;
// }

// const firstName = 'AIXTEE';
// console.log(calcAge(1995));

//TDZ
// console.log(me);
// console.log(job);
// console.log(birthYear);

// var me = 'AXITEE';
// let job = 'Web Developer';
// const birthYear = 1995;

// console.log(add(2, 3));
// console.log(addtwo(2, 3));
// console.log(addArow(2, 3));

// function add(a, b) {
//   return a + b;
// }

// const addtwo = function (a, b) {
//   return a + b;
// };

// const addArow = (a, b) => a + b;

// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);

//this
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2025 - birthYear);
//   console.log(this);
// };

// calcAge(1995);

// const calcAgeArrow = birthYear => {
//   console.log(2025 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1995);

// const AXITEE = {
//   name: 'AXITEE',
//   birthyear: 1995,
//   age: function () {
//     console.log(this.birthyear);
//   },
// };

// AXITEE.age(); // 输出：1995

// const Jonas = {
//   year: 2017,
// };

// Jonas.age = AXITEE.age;

//常规函数 VS 箭头函数：

// const AXITEE = {
//   firstName: 'AXITEE',
//   birthyear: 1995,
//   age: function () {
//     console.log(this.birthyear);

//     // 解决在 age 方法中使用 this 的问题1
//     // const self = this;
//     // const adult = function () {
//     //   if (self.birthyear >= 18) {
//     //     console.log('You are an adult');
//     //   }
//     // };
//     // adult();

//     // 解决在 age 方法中使用 this 的问题2
//     const adult = () => {
//       if (this.birthyear >= 18) {
//         console.log('You are an adult');
//       }
//     };
//     adult();
//   },

//   greet: () => {
//     console.log(`Hello, my name is ${this.firstName}`);
//   },
// };

// AXITEE.greet(); // 输出：Hello, my name is undefined,因为箭头函数没有自己的 this 值。
// AXITEE.age();

// //Augment 关键字：
// const addExpor = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpor(2, 5);

//对象参考和深拷贝

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica1;
marriedJessica.lastName = 'Davis';
// console.log(jessica);
//为什么输出的是 Davis，而不是 Williams？因为 marriedJessica 是一个引用，它指向了 jessica 对象的内存地址。所以当 marriedJessica 修改 lastName 的值时，jessica 也会跟着改变。

//浅拷贝：
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//使用...操作符进行浅拷贝
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davis';

//深拷贝：
// const jessicaDeepCopy = JSON.parse(JSON.stringify(jessica2));
const jessicaDeepCopy = structuredClone(jessica2); //推荐使用structuredClone，因为它更安全
jessicaDeepCopy.family.push('Charlie', 'David');
console.log(jessica2, jessicaDeepCopy);
