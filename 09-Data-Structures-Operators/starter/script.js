'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

//数组重构
const arr = [1, 2, 3];
const [a, b, c] = arr;

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
