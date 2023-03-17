'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const block = document.querySelectorAll('[data-block]'),
        btnForBlock =document.querySelectorAll('[data-btn]');

  btnForBlock.forEach((item, i) => {
    item.addEventListener('click', () => {
      block[i].classList.toggle('projects__inner--open');
      if (block[i].classList.contains('projects__inner--open')) {
        item.textContent = 'Скрыть описание';
      } else {
        item.textContent = 'Описание проекта';
      }
    });
  });
});