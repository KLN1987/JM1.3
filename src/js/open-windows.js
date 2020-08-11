const navigationOpenBtn = document.querySelector('.header__navigation-toggle-btn');
const navigationCloseBtn = document.querySelector('.header__navigation-toggle-btn-close');
const sideMenu = document.querySelector('.side__menu');
const wrapperOpenMenu = document.querySelector('.wrapper__open-menu');
const wrapperOpenMenuBg = document.querySelector('.wrapper__open-menu-bg');
const searchList = document.querySelector('.header__search-list');
const informationsList = document.querySelector('.informations__list');
const contactsList = document.querySelector('.contacts__list');

const feedbackBtn = document.querySelectorAll('.feedback');
const modalFeedback = document.querySelector('.modal__feedback');
const modalCloseFeedback = document.querySelector('.modal__close-feedback');

const callbackBtn = document.querySelectorAll('.callback');
const modalCallback = document.querySelector('.modal__callback');
const modalCloseCallback = document.querySelector('.modal__close-callback');

//закрытие на ESC

function modalEscPressHandler(evt) {
  if (evt.keyCode === 27) {
    sideMenu.classList.remove('side__menu--active');
    wrapperOpenMenu.classList.remove('wrapper__open-menu-bg');
    navigationOpenBtn.classList.remove('header__navigation-toggle-btn-close');
    searchList.classList.remove('header__search-list-open');
    informationsList.classList.remove('information__list-open-menu');
    contactsList.classList.remove('contacts__list-open-menu');
    modalFeedback.classList.remove('modal__feedback-open');
    modalCallback.classList.remove('modal__callback-open');
    wrapperOpenMenu.style.zIndex = '9';
  }
};

// открывает боковое меню

function navigationOpenBtnClickHandler() { 
  sideMenu.classList.toggle('side__menu--active');
  wrapperOpenMenu.classList.toggle('wrapper__open-menu-bg');
  navigationOpenBtn.classList.toggle('header__navigation-toggle-btn-close');
  searchList.classList.toggle('header__search-list-open');
  contactsList.classList.toggle('contacts__list-open-menu');
  informationsList.classList.toggle('information__list-open-menu');
}

//работает с обработкой событий при клике на фон

function wrapperOpenMenuHandler() {
  sideMenu.classList.remove('side__menu--active');
  wrapperOpenMenu.classList.remove('wrapper__open-menu-bg');
  navigationOpenBtn.classList.remove('header__navigation-toggle-btn-close');
  searchList.classList.remove('header__search-list-open');
  informationsList.classList.remove('information__list-open-menu');
  contactsList.classList.remove('contacts__list-open-menu');
  modalFeedback.classList.remove('modal__feedback-open');
  modalCallback.classList.remove('modal__callback-open');
  wrapperOpenMenu.style.zIndex = '9';
}

navigationOpenBtn.addEventListener('click', navigationOpenBtnClickHandler); 

wrapperOpenMenu.addEventListener('click', wrapperOpenMenuHandler);

document.addEventListener('keydown', modalEscPressHandler);
 
/*if (!navigationOpenBtn.classList.contains('header__navigation-toggle-btn-close')) {
    sideMenu.classList.add('side__menu-active');
    wrapperOpenMenu.classList.add('wrapper__open-menu-bg');
    navigationOpenBtn.classList.add('header__navigation-toggle-btn-close');
    searchList.classList.add('header__search-list-open');
    contactsList.classList.add('contacts__list-open-menu');
    informationsList.classList.add('information__list-open-menu');
  } else {
    navigationOpenBtn.classList.remove('header__navigation-toggle-btn-close');
    sideMenu.classList.remove('side__menu-active');
    wrapperOpenMenu.classList.remove('wrapper__open-menu-bg');
    searchList.classList.remove('header__search-list-open');
    contactsList.classList.remove('contacts__list-open-menu');
    informationsList.classList.remove('information__list-open-menu');
  }*/

// }); 



/*function () {
    sideMenu.classList.remove('side__menu-active');
    wrapperOpenMenu.classList.remove('wrapper__open-menu-bg');
    navigationOpenBtn.classList.remove('header__navigation-toggle-btn-close');
    searchList.classList.remove('header__search-list-open');
    informationsList.classList.remove('information__list-open-menu');
    contactsList.classList.remove('contacts__list-open-menu');
    modalFeedback.style.display = 'none';
    modalCallback.style.display = 'none';
    wrapperOpenMenu.style.zIndex = '9';
    modalFeedback.style.display = 'none';
    modalCallback.style.display = 'none';
});*/


// функция появления/исчезания хедера при ресайзе экрана

/*function onOpen() {
  if (window.innerWidth >= '1440') {
    sideMenu.classList.remove('side__menu-active');
    navigationOpenBtn.classList.remove('header__navigation-toggle-btn-close');
    wrapperOpenMenu.classList.remove('wrapper__open-menu-bg');
    searchList.classList.remove('header__search-list-open');
    contactsList.classList.remove('contacts__list-open-menu');
    informationsList.classList.remove('information__list-open-menu');
  }
}

onOpen();

window.addEventListener('resize', function () {
  onOpen();
});*/


//функции для модалок

function feedbackBtnOpenHandler() {
  modalFeedback.classList.add('modal__feedback-open');
  wrapperOpenMenu.classList.add('wrapper__open-menu-bg');
  wrapperOpenMenu.style.zIndex = '999';
  modalCloseFeedback.focus();
}

function callbackBtnOpenHandler() {
  modalCallback.classList.add('modal__callback-open');
  wrapperOpenMenu.classList.add('wrapper__open-menu-bg');
  wrapperOpenMenu.style.zIndex = '999';
  modalCloseCallback.focus();
}

function modalCloseFeedbackHandler() {
  modalFeedback.classList.remove('modal__feedback-open');
  wrapperOpenMenu.classList.remove('wrapper__open-menu-bg');
  if (!navigationOpenBtn.classList.contains('header__navigation-toggle-btn-close')) {
    wrapperOpenMenu.style.zIndex = '0';
  } else {
      wrapperOpenMenu.style.zIndex = '9';
      wrapperOpenMenu.classList.add('wrapper__open-menu-bg');
  }
}

function modalCloseCallbackHandler() {
  modalCallback.classList.remove('modal__callback-open');
  wrapperOpenMenu.classList.remove('wrapper__open-menu-bg');
  if (!navigationOpenBtn.classList.contains('header__navigation-toggle-btn-close')) {
    wrapperOpenMenu.style.zIndex = '0';
  } else {
      wrapperOpenMenu.style.zIndex = '9';
      wrapperOpenMenu.classList.add('wrapper__open-menu-bg');
  }
}


for (let j = 0; j < feedbackBtn.length; j++) {
  feedbackBtn[j].addEventListener('click',feedbackBtnOpenHandler);
} 

for (let i = 0; i < callbackBtn.length; i++) {
  callbackBtn[i].addEventListener('click', callbackBtnOpenHandler)
} 

modalCloseCallback.addEventListener('click', modalCloseCallbackHandler);

modalCloseFeedback.addEventListener('click', modalCloseFeedbackHandler);
  
  /*function () {
    modalFeedback.classList.add('modal__feedback-open');
    wrapperOpenMenu.classList.add('wrapper__open-menu-bg');
    wrapperOpenMenu.style.zIndex = '999';
  });
}*/



/*function () {
  modalFeedback.classList.remove('modal__feedback-open');
  wrapperOpenMenu.classList.remove('wrapper__open-menu-bg');
  if (!navigationOpenBtn.classList.contains('header__navigation-toggle-btn-close')) {
    wrapperOpenMenu.style.zIndex = '0';
  } else {
      wrapperOpenMenu.style.zIndex = '9';
      wrapperOpenMenu.classList.add('wrapper__open-menu-bg');
  }
});*/

  
  /*function () {
    modalCallback.classList.add('modal__callback-open');
    wrapperOpenMenu.classList.add('wrapper__open-menu-bg');
    wrapperOpenMenu.style.zIndex = '999';
  });
}*/


/*function () {
  modalCallback.classList.remove('modal__callback-open');
  wrapperOpenMenu.classList.remove('wrapper__open-menu-bg');
  if (!navigationOpenBtn.classList.contains('header__navigation-toggle-btn-close')) {
    wrapperOpenMenu.style.zIndex = '0';
  } else {
      wrapperOpenMenu.style.zIndex = '9';
      wrapperOpenMenu.classList.add('wrapper__open-menu-bg');
  }
});*/