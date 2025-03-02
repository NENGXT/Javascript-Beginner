'use strict';

// document.querySelector('.message').textContent = 'Hello World!';
// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 100;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });
let secret = Math.trunc(Math.random() * 10 + 1);
let score = 20;
let highScore = 0;
const btn = document.querySelector('.check');

//设置改变界面显示的函数
const display = function (message, score) {
  document.querySelector('.message').textContent = message; //设置显示消息
  document.querySelector('.score').textContent = score; //设置显示分数
};

//当点击按钮时
btn.addEventListener('click', function () {
  let guessInput = Number(document.querySelector('.guess').value);

  let correctNumber = document.querySelector('.number');

  //当没有输入时
  if (!guessInput) {
    // message.textContent = 'Please enter a number';
    display('Please enter a number');
  }
  //当猜对时
  else if (guessInput === secret) {
    correctNumber.textContent = secret;
    display('🎉 You got it!', score);
    document.querySelector('body').style.backgroundColor = '#60b347';
    correctNumber.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //当猜错时
  else if (guessInput != secret) {
    if (score > 1) {
      guessInput > 0 ? score-- : (score = 0);
      display(guessInput > secret ? `🐸 Too high!` : `🐸 Too low!`, score); //用三元运算符决定输入过大过小时输出的信息
    } else {
      display(`Game Over!`, 0);
    }
  }
  // //当输入大于设置好的随机数时
  // else if (guessInput > secret) {
  //   if (score > 1) {
  //     guessInput > 0 ? score-- : (score = 0);
  //     message.textContent = `🐸 Too high!`;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     message.textContent = 'Game Over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //当输入小于随机数时
  // else if (guessInput < secret) {
  //   if (score > 1) {
  //     guessInput > 0 ? score-- : (score = 0);
  //     message.textContent = `🐸 Too low!`;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     message.textContent = 'Game Over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//重置功能
const againBtn = document.querySelector('.again');

//当点击重玩按钮时，重新开始游戏
againBtn.addEventListener('click', function () {
  console.log('cick!');
  secret = Math.trunc(Math.random() * 10 + 1); //重制随机数
  score = 20;

  document.querySelector('.guess').value = ''; //重新获取输入框元素并清空

  document.querySelector('body').style.backgroundColor = '#222'; //重置背景颜色

  document.querySelector('.number').style.width = '15rem'; //重置数字盒子的宽度
  document.querySelector('.number').textContent = '?'; //重置数字盒子的内容

  display(`Start guessing...`, score); //显示开始提示信息和当前分数
});
