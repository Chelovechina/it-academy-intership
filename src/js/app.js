"use strict"

import * as Functions from './modules/functions.js';

Functions.isWebp();

// Burger
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const navBlock = document.querySelector('.header__nav');
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active');
    navBlock.classList.toggle('_active');
  });
}

// window.addEventListener('DOMContentLoaded', () => {})