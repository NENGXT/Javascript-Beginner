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

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = '21:00',
    address,
    mainIndex = '0',
    starterIndex = '0',
  }) {
    console.log(
      `订单收到了！${this.starterMenu[starterIndex]}和${this.mainMenu[mainIndex]}，送到${address}，时间是${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`这是你的意大利面，配料有：${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
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
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // console.log(sum);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
