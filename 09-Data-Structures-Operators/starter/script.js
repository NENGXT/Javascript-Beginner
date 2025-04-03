'use strict';
//测试用按钮和输入
const btn = document.querySelector('.btn');
const input = document.getElementById('input');

// btn.addEventListener('click', function () {
//   const inputValue = input.value;
//   restaurant.orderPasta(inputValue, inputValue, inputValue);
//   input.value = '';
// });

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);
const weekDays = ['mon', 'tus', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    time = '21:00',
    address,
    mainIndex = '0',
    starterIndex = '0',
  }) {
    console.log(
      `订单收到了！${this.starterMenu[starterIndex]}和${this.mainMenu[mainIndex]}，送到${address}，时间是${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`这是你的意大利面，配料有：${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(`The main ingredients is ${mainIng}`);
    console.log(`The other ingredients are ${otherIng}`);
  },
};

//在函数中使用括号内参数对对象进行解构
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// 默认值调用测试
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

//对象解构｜Destructuring Objects
// const { name, openingHours, categories } = restaurant;

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

//对象默认值
// const { menu = [], starterMenu: starter = [] } = restaurant;

//对象的变量交换
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

//对象嵌套
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// //数组解构
// const arry = [1, 2, 3, 4];
// const [a, b, c, d] = arry;
// console.log(a, b, c, d);

// let [main, , sub] = restaurant.categories;
// console.log(main, sub);

// // const temp = main;
// // main = sub;
// // sub = temp;
// // console.log(main, sub);

// [sub, main] = [main, sub];
// console.log(main, sub);

// //如何交换和接受两个变量的值
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); // Pasta Pizza

// //嵌套
// const nested = [1, [2, 3], 4];
// const [, i, j] = nested;
// console.log(i, j);

// const [, [x, y], z] = nested;
// console.log(x, y, z);

// //默认值
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 1

//扩展运算符
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// const newArr = [1, 2, ...arr];

// const newMenu = [...restaurant.mainMenu];
// newMenu.unshift(...newArr);

//扩展运算符的例子：拷贝
// const mainMenuCopy = [...restaurant.mainMenu];

//合并数组
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//可迭代对象：字符串、数组、Map、Set等都是可迭代对象，可以使用扩展运算符来遍历它们。
// const str = `AXITEE`;
// const letters = [...str, ...mainMenuCopy];

// const ingredients = [input.value, 'cheese', 'garlic'];
// restaurant.orderPasta(...ingredients);

//迭代对象
// const restaurantCopy = { ...restaurant, client: 'AXITEE' };
// restaurantCopy.name = '麻辣香锅';

/*------------
剩余参数和剩余模式
-------------*/
//数组解构
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const [a, b, ...others] = arr;
// // console.log(a, b, others); // 1 2 [ 3, 4, 5, 6, 7, 8 ]

// const [pizza, , risooto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risooto, ...otherFood); // Pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

//对象解构
// const { sat, ...workDays } = restaurant.openingHours;
// console.log(workDays);

//函数解构
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   // console.log(sum);
// };

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

//&& 和 ||
// console.log(3 || 'hello'); // hello
// console.log(false || 'hello'); // hello
// console.log('' || 'hello'); // hello

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log(7 && 'hello'); // hello
//&&的实际例子
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('apple', 'banana', 'cherry');
// }

// restaurant.orderPizza && restaurant.orderPizza('apple', 'banana', 'cherry');

//??空值合并运算符的用法
// restaurant.numGuest = 0;
// const guests = restaurant.numGuest ?? 10;
// console.log(guests); // 0

// const guestCount = restaurant.numGuest ?? 20;
// console.log(guestCount);

/*-------
逻辑赋值运算符（Logical Assignment Operators）
-------*/
// const rest1 = {
//   name: '华莱士',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'サイゼリヤ',
//   owner: 'joruno josta',
// };

// ||= 运算符

// rest1.numGuests ||= 10;
// console.log(rest1); // {name: '华莱士', numGuests: 20}

// rest2.numGuests ||= 10;
// console.log(rest2); // {name: 'サイゼリヤ', owner: 'joruno josta', numGuests: 10}

// ??= 运算符

// rest1.numGuests ??= 10;
// rest2.nameGuests ??= 10;

// &&= 运算符
// rest1.owner &&= ';';
// rest2.owner &&= ';';

// //题目代码
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1.
// const [players1, players2] = game.players;
// //2.
// const [gk, ...fieldPlayers] = players1;
// //3.
// const allPlayers = [...players1, ...players2];
// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(draw);
// //6.
// const printGoals = function (...palyerName) {
//   console.log(`${palyerName.length} goals were scored`);
//   // console.log(palyerName.length);
// };
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// //7.
// team1 < team2 && console.log('`team1 will be the winner`');
// team1 > team2 && console.log('`team2 will be the winner`');

//for-of Loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   // console.log(item);
// }
// for (const item of menu.entries()) {
//   // console.log(`${item[0] + 1}: ${item[1]}`);
// }
// for (const [num, item] of menu.entries()) {
//   // console.log(`${num + 1}: ${item}`);
// }

//?.

// console.log(restaurant.openingHours.mon?.open);
// const person = {
//   name: 'kuma',
//   age: 30,
// };
// console.log(person.country?.area);

for (const day of weekDays) {
  // console.log(day?.openingHours?.open);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // console.log(`On ${day}, we open at ${open}`);
}

// console.log(restaurant.order?.(0, 1) ?? 'No order available');

// const arr = [1, 2, 3, 4, 5];
// console.log(arr[0]?.name ?? 'error');

//遍历
//遍历对象的key
// const workDays = Object.keys(openingHours);
// let openStr = `我们的餐厅一周营业${workDays.length}天:`;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day},`;
// }
// console.log(openStr);

//遍历对象的values
// const values = Object.values(openingHours);

//遍历对象的entries
// const entries = Object.entries(openingHours);
// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }
