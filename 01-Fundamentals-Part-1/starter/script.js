
// let fristName = 'John';
// let myJob = 'Developer';

// console.log(fristName + ' ' + myJob); // Output: John

// let isFun = true;
// let message = "Hello world!";
// console.log("messgae type is " + typeof (message) + " and isFun type is " + typeof (isFun));

// let number = 10;
// console.log(number); // Output: 10
// number = '20';
// console.log(number); // Output: 20

// const message = 'The age of you and I is';

// const thisYear = new Date().getFullYear();

// const myAge = thisYear - 1995;
// const yourAge = thisYear - 1987;
// console.log(`${message} ${myAge} and ${yourAge} years old.`);

// const theName = 'John';
// const age = new Date().getFullYear() - 1995;

// console.log(`${theName}'s age is ${age > 18}`);

/*---------------
CODE CHALLENGE 1
---------------*/

// const markData1 = [78, 1.69];
// const johnData1 = [92, 1.95];

// const markData2 = [95, 1.88];
// const johnData2 = [85, 1.76];

// const markBMI = [markData1[0] / markData1[1] ** 2, markData2[0] / markData2[1] ** 2];
// const johnBMI = [johnData1[0] / johnData1[1] ** 2, johnData2[0] / johnData2[1] ** 2];

// const result1 = markBMI[0] > johnBMI[0];
// const result2 = markBMI[1] > johnBMI[1];

// console.log(`Mark's BMI is ${markBMI}, and John's BMI is ${johnBMI})`);
// console.log(`${result1 ? 'Mark is heavier' : 'John is heavier'}`);
// console.log(`${result2 ? 'Mark is heavier' : 'John is heavier'}`);

/*---------------
模版字符串
---------------*/

// const firstName = "AXITEE";
// const job = "Software Engineer";
// const age = new Date().getFullYear() - 1995;

// const aboutMe = '我是' + firstName + '，我是一名' + job + '，我今年' + age + '。';
// const newMe = `我是${firstName}，我是一名${job},我今年${age}。`;

// console.log(`${aboutMe}
// ${newMe}`);

/*---------------
IF/ELSE語句
---------------*/
// const age = 11;
// const isEnough = age >= 18;

// if (isEnough) {
//     console.log(`你已满${age}岁，你可以开车了🚗。`);
// } else {
//     const isOk = 18 - age;
//     console.log(`你未满${age}岁，不能开车。你还需要${isOk}年才能开车。`);
// }

// const point = 90;
// let message;
// if (point >= 60) {
//     message = "恭喜你，通过考试！";
// } else {
//     message = "很遗憾，没有通过考试。";
// }
// console.log(message);

/*---------------
CODE CHALLENGE 2
---------------*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher.`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher.`);
// }

/*---------------
类型转换
---------------*/
// const age = '25';
// const newAge = Number(age);
// console.log(newAge + 1);

// const year = 1995;
// const newYear = String(year);
// console.log(typeof newYear);

// console.log('23' + 1);
// console.log('1' - 1);

/*---------------
真假值
---------------*/
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(''));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//     console.log(`Don't use so quick!`);
// } else {
//     console.log(`You should save your money!`);
// }

// let height = new Date().getFullYear();
// if (height) {
//     console.log("Height is defined!" + height);
// } else {
//     console.log("Height is undefined!");
// }

/*---------------
==和===
---------------*/


// const inputAge = prompt('Enter your age: ');
// const age = Number(inputAge);
// if (age === 18) {
//     console.log('YOUR are an adult!');
// } else if (age > 18) {
//     console.log('You are a teenager!');
// }
// else {
//     console.log('You are not an adult!');
// }

// if (age !== 18) {
//     console.log(`You are not 18!`);
// } else {
//     console.log(`You are 18!`);
// }

/*---------------
AND/OR/NOT
---------------*/

// const hasLicense = true;
// const hasGoodVision = true;
// const isTired = true;

// const shouldDrive = hasLicense && hasGoodVision && !isTired;

// if (shouldDrive) {
//     console.log("You can drive!");
// } else {
//     console.log("You cannot drive!");
// }

/*---------------
CODE CHALLENGE 3
---------------*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else {
//     console.log('It is a draw!');
// }

/*---------------
SWITCH
---------------*/

// const inputA = 1;
// const inputB = 30;
// const operator = '-';

// switch (operator) {
//     case '+':
//         console.log(`${inputA} + ${inputB} = ${inputA + inputB}`);
//         break;
//     case '-':
//         console.log(`${inputA} - ${inputB} = ${inputA - inputB}`);
//         break;
//     case '*':
//         console.log(`${inputA} * ${inputB} = ${inputA * inputB}`);
//         break;
//     case '/':
//         console.log(`${inputA} / ${inputB} = ${inputA / inputB}`);
//         break;
//     default:
//         console.log('Invalid operator');
// }

/*---------------
条件运算符（三元运算符）
---------------*/
// const age = 18;
// age >= 18 ? console.log('You are an adult') : console.log('You are a minor');

// const result = age >= 18 ? '🥸' : '😇';
// console.log(result);

// const score = 85;
// const message = score >= 60 ? '恭喜通过期末考🥳' : `你不及格😭`;
// console.log(`同学，你的考试成绩是${score}分，${message}`);

/*---------------
CODE CHALLENGE 4
---------------*/

// const bill = 275;
// const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// console.log(`你的账单总额为${bill}元，消费为${tip}元，合计:${bill + tip}元。`);