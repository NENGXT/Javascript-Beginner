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
function calcAge1(birthday) {
    const age = new Date().getFullYear() - birthday;
    return age;
}
const age1 = calcAge1(2000); // 调用函数并传入参数
console.log(age1); // 输出结果