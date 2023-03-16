'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const block = document.querySelector('[data-block]'),
        btnForBlock =document.querySelector('[data-btn]');

  btnForBlock.addEventListener('click', () => {
    block.classList.toggle('projects__inner--open');
    if (block.classList.contains('projects__inner--open')) {
      btnForBlock.style.paddingTop = '10px';
      btnForBlock.style.borderRadius = '15px';
      btnForBlock.classList.add('projects__btn--open');
      block.style.bottom = '-96%';
    } else {
      btnForBlock.style.paddingTop = '';
      btnForBlock.style.borderRadius = '';
      block.style.bottom = '';
      btnForBlock.classList.remove('projects__btn--open');
    }
 });
});