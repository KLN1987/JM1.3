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

//закрывает модалки

function closeModal() {
  sideMenu.classList.remove('side__menu--active');
  wrapperOpenMenu.classList.remove('wrapper__open-menu-bg');
  navigationOpenBtn.classList.remove('header__navigation-toggle-btn-close');
  searchList.classList.remove('header__search-list-open');
  informationsList.classList.remove('information__list-open-menu');
  contactsList.classList.remove('contacts__list-open-menu');
  modalFeedback.classList.remove('modal__feedback-open');
  modalCallback.classList.remove('modal__callback-open');
  wrapperOpenMenu.style.zIndex = '9';
  document.removeEventListener('keydown', modalEscPressHandler);
}

//закрытие на ESC

function modalEscPressHandler(evt) {
  if (evt.keyCode === 27) {
    console.log('1');
    closeModal()
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
  document.addEventListener('keydown', modalEscPressHandler);
}

navigationOpenBtn.addEventListener('click', navigationOpenBtnClickHandler); 

wrapperOpenMenu.addEventListener('click', closeModal);
 
//функции для модалок

function wrapperActionHandler() {
  wrapperOpenMenu.classList.remove('wrapper__open-menu-bg');
  if (!navigationOpenBtn.classList.contains('header__navigation-toggle-btn-close')) {
    wrapperOpenMenu.style.zIndex = '0';
  } else {
      wrapperOpenMenu.style.zIndex = '9';
      wrapperOpenMenu.classList.add('wrapper__open-menu-bg');
  }
}

function feedbackBtnOpenHandler() {
  modalFeedback.classList.add('modal__feedback-open');
  wrapperOpenMenu.classList.add('wrapper__open-menu-bg');
  wrapperOpenMenu.style.zIndex = '999';
  modalCloseFeedback.focus();
  document.addEventListener('keydown', modalEscPressHandler);
}

function callbackBtnOpenHandler() {
  modalCallback.classList.add('modal__callback-open');
  wrapperOpenMenu.classList.add('wrapper__open-menu-bg');
  wrapperOpenMenu.style.zIndex = '999';
  modalCloseCallback.focus();
  document.addEventListener('keydown', modalEscPressHandler);
}

function modalCloseFeedbackHandler() {
  modalFeedback.classList.remove('modal__feedback-open');
  wrapperActionHandler();
}

function modalCloseCallbackHandler() {
  modalCallback.classList.remove('modal__callback-open');
  wrapperActionHandler();
}

for (let j = 0; j < feedbackBtn.length; j++) {
  feedbackBtn[j].addEventListener('click',feedbackBtnOpenHandler);
} 

for (let i = 0; i < callbackBtn.length; i++) {
  callbackBtn[i].addEventListener('click', callbackBtnOpenHandler)
} 

modalCloseCallback.addEventListener('click', modalCloseCallbackHandler);

modalCloseFeedback.addEventListener('click', modalCloseFeedbackHandler);
