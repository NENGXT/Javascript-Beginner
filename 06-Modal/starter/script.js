'use strict';
const modal = document.querySelector('.modal'); //读取modal元素
const overlay = document.querySelector('.overlay'); //读取overlay元素
const btnCloseModal = document.querySelector('.close-modal'); //读取close-modal按钮元素
const btnsShowModal = document.querySelectorAll('.show-modal'); //读取所有的show-modal按钮元素

//定义一个名为toogleModal的函数，当调用这个函数时，它会切换modal和overlay元素的class属性，使其显示或隐藏。
const toogleModal = function (event) {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  confetti({
    particleCount: 75,
    spread: 45,
    origin: { x: mouseX / window.innerWidth, y: mouseY / window.innerHeight },
  });
};

//添加点击事件监听器到所有的show-modal按钮上，当点击时调用toogleModal函数，并传入'hidden'作为参数。
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', toogleModal);
}

btnCloseModal.addEventListener('click', toogleModal);

overlay.addEventListener('click', toogleModal);
