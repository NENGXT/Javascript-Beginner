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

async function updateMessage() {
  try {
    getMessage.textContent = '🤖 等苦蛋说话...';
    const res = await fetch('http://localhost:3100/ollama');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    getMessage.textContent = (data.text || '（暂无消息）').trim();
  } catch (err) {
    getMessage.textContent = `⚠️ ${err.message}`;
  }
}

updateMessage();
setInterval(updateMessage, 3000);

//-------------------------------//
