'use strict';

// document.querySelector('.message').textContent = 'Hello World!';
// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 100;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });
const btn = document.querySelector('.check');

btn.addEventListener('click', () => {
  const inputNum = Number(document.querySelector('.guess').value);
  console.log(inputNum);

  if (!inputNum) {
    document.querySelector('.message').textContent = '⚠️ Please enter a number';
  }
});
