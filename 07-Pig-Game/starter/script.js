'use strict';
//获取总分
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
//获取骰子
const dice = document.querySelector('.dice');

//初始化
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

// document.addEventListener('keydown', e => {
//   dice.classList.toggle('hidden');
//   if (!dice.classList.contains('hidden')) {
//     let randomNum = Math.floor(Math.random() * 6 + 1);
//     dice.src = `dice-${randomNum}.png`;
//     console.log(dice.src);
//   }
// });
