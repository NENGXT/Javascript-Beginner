'use strict';

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
const { name, openingHours, categories } = restaurant;

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//对象默认值
const { menu = [], starterMenu: starter = [] } = restaurant;

//对象的变量交换
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

//对象嵌套
const {
  fri: { open, close },
} = openingHours;
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
