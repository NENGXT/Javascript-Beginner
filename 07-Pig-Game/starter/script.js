'use strict';
//获取玩家区域
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//获取总分
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
//获取当前分数
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//获取骰子
const diceEl = document.querySelector('.dice');
//获取按钮
const btnRoll = document.querySelector('.btn--roll');
const btnReset = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//全局变量
let currentScore;
let activePlayer;
let score;
let isPlaying;

//初始化函数
const init = function () {
  //重置总分界面文字
  score0El.textContent = '0';
  score1El.textContent = '0';
  //重置当前分数界面文字
  current0El.textContent = '0';
  current1El.textContent = '0';
  //移除获胜者类名
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  //切换活跃玩家显示并设置默认为玩家1
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  diceEl.classList.add('hidden');
  currentScore = 0;
  activePlayer = 0; //当前玩家
  score = [0, 0]; //双方总分
  isPlaying = true; //游戏是否进行中
};

init();

//切换函数
const activeChange = function () {
  //重置当前分数为0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //切换到下一个人
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//骰子功能
btnRoll.addEventListener('click', () => {
  if (isPlaying) {
    //1.生成一个骰子数
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    //2.显示骰子图片
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNum}.png`;
    //3.检查骰子是否是1，如果是，则重置当前分数为0，并切换到下一个人
    if (diceNum !== 1) {
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      activeChange();
    }
  } else {
    alert('请按开始按钮开始游戏');
  }
});

//保留记分到总分
btnHold.addEventListener('click', () => {
  if (isPlaying) {
    //将当前分数加到总分中
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    console.log(`${activePlayer}`);
    //检测分数是否达到21，如果是，则显示获胜者并结束游戏
    if (score[activePlayer] >= 21) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      isPlaying = false;
      diceEl.classList.add('hidden');
    } else {
      //切换玩家
      activeChange();
    }
  } else {
    alert('请按开始按钮开始游戏');
  }
});

//开始游戏按钮
btnReset.addEventListener('click', init);
