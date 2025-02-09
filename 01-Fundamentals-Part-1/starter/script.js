
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

const firstName = "AXITEE";
const job = "Software Engineer";
const age = new Date().getFullYear() - 1995;

const aboutMe = '我是' + firstName + '， 我是一名' + job + '，我今年' + age + '。';

console.log(aboutMe);