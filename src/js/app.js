"use strict"

import * as Functions from './modules/functions.js';

Functions.isWebp();

// Burger
function openBurger(iconMenu, navBlock) {
  if (iconMenu.classList.contains("_active")) {
    document.body.classList.remove('_lock')
    iconMenu.classList.remove('_active');
    navBlock.classList.remove('_active');
  }else {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active');
    navBlock.classList.toggle('_active');
  }
}

const headerIconMenu = document.getElementById("header-icon-menu");
const headerNavBlock = document.getElementById("header-nav")
headerIconMenu.addEventListener("click", () => { openBurger(headerIconMenu, headerNavBlock); }, false);

const asideIconMenu = document.getElementById("aside-icon-menu");
const asideNavBlock = document.getElementById("aside-nav")
asideIconMenu.addEventListener("click", () => { openBurger(asideIconMenu, asideNavBlock); }, false);

// window.addEventListener('DOMContentLoaded', () => {})

// const iconMenu = document.querySelector('.menu__icon');
// if (iconMenu) {
//   const navBlock = document.querySelector('.header__nav');
//   iconMenu.addEventListener("click", function(e) {
//     document.body.classList.toggle('_lock')
//     iconMenu.classList.toggle('_active');
//     navBlock.classList.toggle('_active');
//   });
// }