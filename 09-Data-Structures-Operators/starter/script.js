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

// for (const day of weekDays) {
//   console.log(day?.openingHours?.open);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

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

//题目代码
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*-------挑战1--------*/
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

/*-------挑战2--------*/
// //1.
// for (let [num, name] of game.scored.entries()) {
//   // console.log(`球员 ${num + 1} 是 ${name}`);
// }
// //2.
// const odds = Object.values(game.odds);
// let sum = 0;
// for (let odd of odds) {
//   sum += odd;
// }
// let avg = sum / odds.length;
// // console.log(Math.floor(avg));

// //3.
// for (const [team, value] of Object.entries(game.odds)) {
//   const str = team === 'x' ? 'Odd of draw' : `Odd of victory ${game[team]}`;
//   console.log(`${str}:${value}`);
// }

// //Bouns:
// const sorers = {};
// for (let players of game.scored) {
//   console.log(players);
//   sorers[players] ? sorers[players]++ : (sorers[players] = 1);
// }

/*-------SETS--------*/
// const ordersSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'risotto',
//   'pasta',
//   'pizza',
// ]);

// console.log(ordersSet.size);
// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.add('garlic bread'));
// console.log(ordersSet.delete('risotto'));
// console.log(ordersSet);

// const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Waiter'];
// const starffUniq = [...new Set(staff)];
// console.log(starffUniq);

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// const commonFood = italianFoods.intersection(mexicanFoods);
// console.log(commonFood);
// const fusionFood = italianFoods.union(mexicanFoods);

// const uniqItalian = italianFoods.difference(mexicanFoods);
// const uniqMaxican = mexicanFoods.difference(italianFoods);

/*-------MAPS--------*/

// const rest = new Map();
// rest.set('name', 'ikebukuro');
// rest.set(1, '1-2-3 ikebukuro');

// rest
//   .set('categories', ['Italian', 'Japanese', 'Mexican'])
//   .set('open', 12)
//   .set('close', 24)
//   .set(true, 'we are open:)')
//   .set(false, 'we are closed:(');

// const time = new Date().getHours();
// const isOpen = rest.get(time >= rest.get('open') && time <= rest.get('close'));

// console.log(rest.has(1));
// rest.delete('categories');
// console.log(rest);

// rest.set([1, 2], 'value');
// console.log(rest.get([1, 2])); // undefined
// const h1 = document.querySelector('h1');
// rest.set(h1, 'This is a h1 element');

// console.log(rest.get(h1));

// const questions = new Map([
//   ['question', 'what launguage is the best in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct:)'],
//   [false, 'Wrong:('],
// ]);

// const newMap = new Map(Object.entries(openingHours));
// console.log(newMap, Object.entries(openingHours));

// console.log(questions.get('question'));
// for (const [key, value] of questions) {
//   if (typeof key === 'number') {
//     console.log(value);
//   }
// }
// const answer = Number(prompt('Write the correct answer:'));
// console.log(questions.get(answer === questions.get('correct')));

// console.log([...questions]);
// console.log([...questions.keys()]);

//-------------特殊练习-------------//
const getMessage = document.getElementById('message');
const getWeather = async function () {
  getMessage.textContent = `☁️ 正在获取天气...`;
  const response = await fetch('https://wttr.in/Tokyo?format=3');
  const data = await response.text();
  getMessage.textContent = data;
};
getWeather();
setInterval(getWeather, 300000);
//-------------------------------//

//代码挑战3
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
//1.
// const events = new Set(gameEvents.values());
// console.log(events);
//2.
// const newGameEvents = gameEvents.delete(64);
//3.
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`每平均${time / gameEvents.size}分钟发生一次事件`);
//4.
// for (let [key, event] of gameEvents) {
//   let message =
//     key < 45
//       ? `[FIRST HALF] ${key}: ${event}`
//       : `[SECOND HALF] ${key}: ${event}`;
//   console.log(message);
// }

//和字符串一起工作
const airline = 'Japanese Airline';
const plane = 'A320';

// console.log(plane.indexOf('2'));
// console.log(airline.lastIndexOf('a'));
// console.log(airline.slice(airline.indexOf('A')));
// console.log(airline.slice(airline.indexOf('A', 'e')));

// const checkSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   const seatInfo = s === 'B' || s === 'E' ? 'Middle Seat' : 'Window Seat';
//   console.log(`${seatInfo}:${seat}`);
// };

// checkSeat('11B');
// checkSeat('23C');
// checkSeat('3E');
// console.log(airline.toLowerCase());

//修改字符串
// const passenger = 'AXiTeE';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

//比较邮件
// const email = 'axitee@outlook.com';
// const loginEmail = '  axiteE@outlooK.com ';

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail === email); // 输出: true

//替换字符串
// const myName = 'AXITEE NENG';
// const newName = myName.replace('NENG', 'XIONG');
// console.log(newName);

// const MyId = '226989';
// console.log(MyId.replaceAll('2', ''));

// const MyCountry = 'China';
// console.log(MyCountry.replace(/ina/g, 'a'));

//布尔值
const newplane = 'Airbus A320neo';
// console.log(newplane.includes('320'));
// console.log(newplane.startsWith('A32'));

if (newplane.startsWith('Airbus') && newplane.endsWith('neo')) {
  console.log(`YOUR FILGHT IS ${newplane}`);
}
