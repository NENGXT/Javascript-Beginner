'use strict';

// document.querySelector('.message').textContent = 'Hello World!';
// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 100;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });
let secret = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const btn = document.querySelector('.check');

btn.addEventListener('click', function () {
  let guessInput = Number(document.querySelector('.guess').value);
  let message = document.querySelector('.message');
  let correctNumber = document.querySelector('.number');

  //当没有输入时
  if (!guessInput) {
    message.textContent = '⚠️ Please enter a number';
  }
  //当猜对时
  else if (guessInput === secret) {
    message.textContent = '🏆 You win 🏆';
    correctNumber.textContent = secret;
    highScore += 10;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    correctNumber.style.width = '30rem';
  }
  //当输入大于设置好的随机数时
  else if (guessInput > secret) {
    if (score > 1) {
      guessInput > 0 ? score-- : (score = 0);
      message.textContent = `🐸 Too high!`;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //当输入小于随机数时
  else if (guessInput < secret) {
    if (score > 1) {
      guessInput > 0 ? score-- : (score = 0);
      message.textContent = `🐸 Too low!`;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//重置功能
const againBtn = document.querySelector('.again');

//当点击重玩按钮时，重新开始游戏
againBtn.addEventListener('click', function () {
  console.log('cick!');
  secret = Math.trunc(Math.random() * 20 + 1); //重制随机数
  score = 20;

  document.querySelector('.guess').value = ''; //重新获取输入框元素并清空

  document.querySelector('.message').textContent = 'Start guessing...'; //重新更新消息元素

  document.querySelector('body').style.backgroundColor = '#222'; //重置背景颜色

  document.querySelector('.number').style.width = '15rem'; //重置数字盒子的宽度
  document.querySelector('.number').textContent = '?'; //重置数字盒子的内容

  document.querySelector('.score').textContent = score; //重新更新分数元素
});
