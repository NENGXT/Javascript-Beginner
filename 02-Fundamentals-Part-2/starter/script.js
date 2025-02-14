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
// function fruitCutter(fruit) {
//     return fruit * 4;
// }
// function fruitMachine(apples, oranges) {
//     const applepieces = fruitCutter(apples);
//     const orangePieces = fruitCutter(oranges);
//     return `The applejuice needs ${applepieces} pieces of apples.
// The orangesjuice needs ${orangePieces} pieces of oranges.`;
// }
// const juice = fruitMachine(2, 3); // 调用函数并传入参数
// console.log(juice); // 输出结果

//函数的基本原理

// const calcAge = function (birthyear) {
//     return new Date().getFullYear() - birthyear;
// }

// const yearsUnitlRetirement = function (birthyear, firstName) {
//     const retire = 65 - calcAge(birthyear);

//     if (retire > 0) {
//         return `${firstName} will retire in ${retire} years.`;
//     } else {
//         return `${firstName} is already retired.`;
//     }
// }
// console.log(yearsUnitlRetirement(1995, 'AXITEE'));

//代码挑战5
/*
测试数据 1：
海豚队得分：44、23、71
考拉队得分：65、54、49
测试数据 2：
海豚队得分：85、54、41
考拉队得分：23、34、27

只有当一支队伍的平均分至少是另一支队伍的两倍时，该队伍才获胜。否则，没有队伍获胜！
*/

// const averageScore = (round1, round2, round3) => (round1 + round2 + round3) / 3;

// //将平均分赋值给变量
// const scoreDolphins1 = averageScore(44, 23, 71);
// const scoreKoalas1 = averageScore(65, 54, 49);
// const scoreDolphins2 = averageScore(85, 54, 41);
// const scoreKoalas2 = averageScore(23, 34, 27);

// //处理平均分的function
// function checkWinner(avgDolphins, avgKoalas) {

//     if (avgDolphins >= avgKoalas * 2) {
//         return `Dolphins win!(${avgDolphins} vs ${avgKoalas})`;
//     } else if (avgKoalas >= avgDolphins * 2) {
//         return `Koalas win!(${avgKoalas} vs ${avgDolphins})`;
//     } else {
//         return `No team wins!(${avgDolphins} vs ${avgKoalas})`;
//     }
// }

// //将平均分变量赋值给函数的参数，并返回结果
// console.log(checkWinner(scoreDolphins1, scoreKoalas1));
// console.log(checkWinner(scoreDolphins2, scoreKoalas2));


//数组
// const year = new Array(2023, 2024, 2025);
// console.log(year);

// const aboutMe = ['AXITEE', 2025 - 1995, 'Music Produncer and Rookie Progarmer', friends];
// console.log(aboutMe);

// const calcAge = function (birthYear) {
//     return new Date().getFullYear() - birthYear;
// }

// const ages = [1986, 1985, 1986, 1992, 1997];

// const ageArray = [calcAge(ages[0]), calcAge(ages[1]), calcAge(ages[ages.length - 1])];
// console.log(ageArray);

//数组方法
//添加元素
// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('AXITEE', 'LEO', 'JASON');
// console.log(`${friends.push()} and ${friends}`);

// const fruits = ['apple', 'banana', 'orange'];
// const fruitsLeng = fruits.unshift('grape', 'mango');
// console.log(`There are ${fruitsLeng} fruits here! They are : ${fruits}`);

// //删除元素
// const studentList = ['Eric', 'John', 'Mike'];
// const whoWasgone = studentList.pop();
// console.log(studentList, whoWasgone);

// studentList.shift();
// console.log(studentList);

// //查找元素
// const names = ['Alice', 'Bob', 'Charlie'];
// console.log(names.indexOf('Charlie'));

// //判断元素是否存在
// const artist = ['AXITEE', 'LEO', 'AZOOM'];
// const addOne = artist.unshift('MIKE');
// console.log(artist.includes('MIKE'), addOne);

/* 代码挑战6
测试数据：
125、555、44
*/
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * .15 : bill * 2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(`Your bills are ${bills}
// your tips are ${tips}
// your total is ${totals}`);


//对象
// const aboutMe = {
//     name: 'AXITEE',
//     job: 'Rookie Progarmer',
//     age: new Date().getFullYear() - 1995,
//     country: 'Japan'
// }

// const namekey = 'Name';
// console.log(aboutMe['my' + namekey]);
// console.log(aboutMe.age);

// const userKey = prompt('你想知道关于我的什么？');


// if (aboutMe[userKey]) {
//     console.log(aboutMe[userKey]);
// } else {
//     console.log('你输入的不是正确的信息');
// }

// aboutMe.dream = '过平静且稍微富足的生活';//添加属性1
// aboutMe['hobby'] = 'Music and Progarming';//添加属性2

// console.log(aboutMe);

// const accout = {
//     name: 'Jonas',
//     friends: ['Michael', 'Peter', 'Steven']
// }
// const message = `${accout.name} has ${accout.friends.length} friends,his best friend is ${accout.friends[0]}.`;
// console.log(message);

//对象方法
const aboutMe = {
    name: 'AXITEE',
    job: 'Rookie Progarmer',
    birthday: 1995,
    country: 'Japan',
    hasDriverLicense: true,
    // calcAge: function (age) {
    //     if (age >= 18) {
    //         return 'You are old enough to drive';
    //     } else {
    //         return 'You are not old enough to drive';
    //     }
    // }

    // calcAge: function () {
    //     if (this.age >= 18) {
    //         return 'You are old enough to drive';
    //     } else {
    //         return 'You are not old enough to drive';
    //     }
    // }

    calcAge: function () {
        this.age = new Date().getFullYear() - this.birthday;
        return `${this.age}`;
    },

    getSummary: function () {
        this.country = 'CHINA';
        return `该用户的数据为:
姓名：${this.name}
职业：${this.job}
生日：${this.birthday}
国籍：${this.country}
年龄：${this.calcAge()}`;
    }

}

console.log(aboutMe.getSummary());
