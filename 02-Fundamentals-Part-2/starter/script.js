'use strict';

/* ----------
FUNCTION
---------- */

// function looger() {
//     console.log('Hello World');
// }

// looger(); // 调用函数

// function fruitMachine(apples, oranges) {
//     const juice = `juice made with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitMachine(5, 0);
// const orangesJuice = fruitMachine(0, 3);
// console.log(appleJuice, orangesJuice);

//普通的函数声明
// function calcAge1(birthday) {
//     const age = new Date().getFullYear() - birthday;
//     return age;
// }

//匿名函数表达式
// const age1 = function (e) {
//     return (new Date().getFullYear() - e);
// };

// console.log(`my age is ${age1(1995)}`);

//箭头函数声明
// const calcAge1 = (birthday, firstName) => {
//     const age = new Date().getFullYear() - birthday;
//     if (age >= 18) {
//         return `${firstName} is adult`;
//     } else {
//         return '${firstName} is child';
//     }
// }

// console.log(calcAge1(1995, 'AXITEE'));

//函数内部调用其他函数
function fruitCutter(fruit) {
    return fruit * 4;
}
function fruitMachine(apples, oranges) {
    const applepieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);
    return `The applejuice needs ${applepieces} pieces of apples.
The orangesjuice needs ${orangePieces} pieces of oranges.`;
}
const juice = fruitMachine(2, 3); // 调用函数并传入参数
console.log(juice); // 输出结果
