const navigationOpenBtn = document.querySelector('.header__navigation-toggle-btn');
const navigationCloseBtn = document.querySelector('.side-menu__toggle-btn');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');

const modalFeedbackOpenBtn = document.querySelectorAll('.contacts__link--feedback');
const modalFeedback = document.querySelector('.modal_feedback');
const modalFeedbackCloseBtn = document.querySelector('.modal__close-feedback');

const modalCallbackOpenBtn = document.querySelectorAll('.contacts__link--callback');
const modalCallback = document.querySelector('.modal_callback');
const modalCallbackCloseBtn = document.querySelector('.modal__close-callback');

const feedbackInputFocus = modalFeedback.querySelector('.form__input');
const callbackInputFocus = modalCallback.querySelector('.form__input');

const ESCAPE_KЕYDOWN = 27;

// открывает боковое меню
function openedSideMenu() {
  sideMenu.classList.add('side-menu__active');
  overlay.classList.add('overlay--active');
  document.addEventListener('keydown', escapeKeydownHandler);
}

// закрывает боковое меню
function closedSideMenu() {
  sideMenu.classList.remove('side-menu__active');
  overlay.classList.remove('overlay--active');
}
 
//функции для модалок

//функция закрытия при клике на фон/ESC
function closeModalBg() {
  if (sideMenu.classList.contains('side-menu__active')) {
    overlay.style.zIndex = '9';
 } else {
  overlay.classList.remove('overlay--active');
  overlay.removeAttribute('style');
  }
}

//открывает модальное окно с обратной связью
function feedbackBtnOpenHandler() {
  modalFeedback.classList.add('modal_feedback--active');
  overlay.classList.add('overlay--active');
  overlay.style.zIndex = '99';
  feedbackInputFocus.focus();
  document.addEventListener('keydown', escapeKeydownHandler);
}

//открывает модальное окно с обратным звонком
function callbackBtnOpenHandler() {
  modalCallback.classList.add('modal_callback--active');
  overlay.classList.add('overlay--active');
  overlay.style.zIndex = '99';
  callbackInputFocus.focus();
  document.addEventListener('keydown', escapeKeydownHandler);
}

//закрывает модальное окно с обратной связью
function modalFeedbackCloseBtnHandler() {
  modalFeedback.classList.remove('modal_feedback--active');
  closeModalBg();
}

//закрывает модальное окно с обратным звонком
function modalCallbackCloseBtnHandler() {
  modalCallback.classList.remove('modal_callback--active');
  closeModalBg();
}

//фнкция закрытия при esc и клике по фону
function closeModal() {
 if (modalFeedback.classList.contains('modal_feedback--active') && overlay.style.zIndex === '99') {
   return modalFeedbackCloseBtnHandler();
  }
   if (modalCallback.classList.contains('modal_callback--active') && overlay.style.zIndex === '99') {
    return modalCallbackCloseBtnHandler();
  } else {
    return closedSideMenu();
  }
};

//закрытие на ESC
function escapeKeydownHandler(evt) {
  if (evt.keyCode === ESCAPE_KЕYDOWN) {
    closeModal();
  }
};

navigationOpenBtn.addEventListener('click', openedSideMenu);
navigationCloseBtn.addEventListener('click', closedSideMenu);

overlay.addEventListener('click', closeModal);

for (let j = 0; j < modalFeedbackOpenBtn.length; j++) {
  modalFeedbackOpenBtn[j].addEventListener('click',feedbackBtnOpenHandler);
}

for (let i = 0; i < modalCallbackOpenBtn.length; i++) {
  modalCallbackOpenBtn[i].addEventListener('click', callbackBtnOpenHandler)
} 
modalCallbackCloseBtn.addEventListener('click', modalCallbackCloseBtnHandler);
modalFeedbackCloseBtn.addEventListener('click', modalFeedbackCloseBtnHandler);
