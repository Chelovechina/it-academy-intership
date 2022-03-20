"use strict"

window.addEventListener('DOMContentLoaded', () => {

  function init() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/user1289');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
      if (request.readyState === 4 && request.status == 200) {
        const user = JSON.parse(request.response);

        const avatarBlock = document.createElement('div');

        avatarBlock.classList.add('personal-data__avatar-block', 'avatar-block');
        avatarBlock.innerHTML = `
          <img src="${user.photo}" alt="Avatar" class="avatar-block__img">
          <h4 class="avatar-block__name">${user.lastName} ${user.name}</h4>
          <h5 class="avatar-block__status">${user.status}</h5>
        `;
        document.querySelector('.personal-data__block').appendChild(avatarBlock);

        const personalData = document.createElement('div');

        personalData.classList.add('personal-data__info', 'data-info');
        personalData.innerHTML = `
          <div class="data-info__wrapper">
          <div class="data-info__left">
            <p class="data-info__key">Пол:</p>
            <p class="data-info__value">${user.sex}</p>
            <p class="data-info__key">Дата рождения:</p>
            <p class="data-info__value">${user.dateOfBithday}г.</p>
            <p class="data-info__key">Email:</p>
            <p class="data-info__value">${user.email}</p>
            <p class="data-info__key">Номер телефона:</p>
            <p class="data-info__value">${user.phoneNumber}</p>
          </div>
          <div class="data-info__right">
            <p class="data-info__key">Страна:</p>
            <p class="data-info__value">${user.country}</p>
            <p class="data-info__key">Город:</p>
            <p class="data-info__value">${user.city}</p>
            <p class="data-info__key">Адрес:</p>
            <p class="data-info__value">${user.address}</p>
            <p class="data-info__key">Дата регистрации:</p>
            <p class="data-info__value">${user.dateOfRegister}г.</p>
          </div>
        </div>
        `;
        document.querySelector('.personal-data__block').appendChild(personalData);
        
        for (let i = 0; i < user.coursesDone.length; i++) {
          const item = user.coursesDone[i]
          const dataInfoBlock = document.createElement('div');

          dataInfoBlock.classList.add('cources-done__info', 'data-info');
          dataInfoBlock.innerHTML = `
            <h5 class="data-info__title">${item.nameOfcourse}</h5>
            <div class="data-info__wrapper">
              <div class="data-info__left">
                <p class="data-info__key">ID:</p>
                <p class="data-info__value">${item.ID}</p>
                <p class="data-info__key">Дата записи:</p>
                <p class="data-info__value">${item.dateOfRecording}г.</p>
                <p class="data-info__key">Дата окончания:</p>
                <p class="data-info__value">${item.dateOFExpiration}г.</p>
              </div>
              <div class="data-info__right">
                <p class="data-info__key">Оценка:</p>
                <p class="data-info__value">${item.grade}</p>
                <p class="data-info__key">Выполненные практики:</p>
                <p class="data-info__value">${item.practiceDone}/${item.countOfPractice}</p>
                <p class="data-info__key">Курсовая работа:</p>
                <a class="data-info__value data-info__link" href="${item.courseWork}" target="_blank">Посмотреть демо</a>
              </div>
            </div>
          `;
          document.querySelector('.cources-done__container').appendChild(dataInfoBlock);
        }

        for (let i = 0; i < user.coursesInProcess.length; i++) {
          const item = user.coursesInProcess[i]
          const dataInfoBlock = document.createElement('div');

          dataInfoBlock.classList.add('cources-done__info', 'data-info');
          dataInfoBlock.innerHTML = `
            <h5 class="data-info__title">${item.nameOfcourse}</h5>
            <div class="data-info__wrapper">
              <div class="data-info__left">
                <p class="data-info__key">ID:</p>
                <p class="data-info__value">${item.ID}</p>
                <p class="data-info__key">Дата записи:</p>
                <p class="data-info__value">${item.dateOfRecording}г.</p>
              </div>
              <div class="data-info__right">
                <p class="data-info__key">Прогресс:</p>
                <p class="data-info__value">${item.progress}%</p>
                <p class="data-info__key">Выполненные практики:</p>
                <p class="data-info__value">${item.practiceDone}/${item.countOfPractice}</p>
              </div>
            </div>
          `;
          document.querySelector('.cources-process__container').appendChild(dataInfoBlock);
        }

        
      } else {
        console.error("Что-то пошло не так");
      }
    });
  }

  init();
  
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
  
  // Header burger
  const headerIconMenu = document.getElementById("header-icon-menu");
  const headerNavBlock = document.getElementById("header-nav")
  headerIconMenu.addEventListener("click", () => { openBurger(headerIconMenu, headerNavBlock); }, false);
  
  // Aside burger
  const asideIconMenu = document.getElementById("aside-icon-menu");
  const asideNavBlock = document.getElementById("aside-nav")
  asideIconMenu.addEventListener("click", () => { openBurger(asideIconMenu, asideNavBlock); }, false);
  
  const menuLinks = document.querySelectorAll(".aside__link[data-goto]");
  
  if (menuLinks.length > 0) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener("click", onMenuLinkClick);
    };
    
    function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBLockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
        
        window.scrollTo({
          top: gotoBLockValue,
          behavior: "smooth"
        });
  
        e.preventDefault();
      }
      
      document.body.classList.remove('_lock')
      asideIconMenu.classList.remove('_active');
      asideNavBlock.classList.remove('_active');
    };
  };
})