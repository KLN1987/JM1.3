var modalFeedbackOpenBtn = document.querySelectorAll('.contacts__link--feedback');
var modalFeedback = document.querySelector('.modal-feedback');
var modalFeedbackCloseBtn = document.querySelector('.modal__close-feedback');
var overlayModal = document.querySelector('.overlay--modal');

var modalCallbackOpenBtn = document.querySelectorAll('.contacts__link--callback');
var modalCallback = document.querySelector('.modal-callback');
var modalCallbackCloseBtn = document.querySelector('.modal__close-callback');

var callBackModalFirstInput = modalCallback.querySelector('.form__input');
var feedBackModalFirstInput = modalFeedback.querySelector('.form__input');

var sideMenu = document.querySelector('.side-menu');
var overlayMenu = document.querySelector('.overlay--menu');

const ESC_KЕYCODE = 27;

function escKeydownHandler(evt) {
  if (evt.keyCode === ESC_KЕYCODE) {
    console.log('aaa');
    if (modalFeedback.classList.contains('modal-feedback--active')) {
      feedbackModalCloseButtonClickHanlder();
      return;
    }
    if (modalCallback.classList.contains('modal-callback--active')) {
      callbackModalCloseButtonClickHanlder();
      return;
    }
    if (overlayMenu.classList.contains('overlay--active')) {
      sideMenu.classList.remove('side-menu--active');
      overlayMenu.classList.remove('overlay--active');
      return;
    }
    if (!overlayMenu.classList.contains('overlay--active')) {
      document.removeEventListener('keydown', escKeydownHandler);
    }
  }
};

//открывает модальное окно с обратной связью
function feedbackModalOpenButtonClickHanlder() {
  modalFeedback.classList.add('modal-feedback--active');
  overlayModal.classList.add('overlay--active');
  feedBackModalFirstInput.focus();
}

//закрывает модальное окно с обратной связью
function feedbackModalCloseButtonClickHanlder() {
  modalFeedback.classList.remove('modal-feedback--active');
  overlayModal.classList.remove('overlay--active');
}

//открывает модальное окно с обратным звонком
function callbackModalOpenButtonClickHanlder() {
  modalCallback.classList.add('modal-callback--active');
  overlayModal.classList.add('overlay--active');
  callBackModalFirstInput.focus();
  
}

//закрывает модальное окно с обратным звонком
function callbackModalCloseButtonClickHanlder() {
  modalCallback.classList.remove('modal-callback--active');
  overlayModal.classList.remove('overlay--active');
}

//слушатели
for (let j = 0; j < modalFeedbackOpenBtn.length; j++) {
  modalFeedbackOpenBtn[j].addEventListener('click',feedbackModalOpenButtonClickHanlder);
}
for (let i = 0; i < modalCallbackOpenBtn.length; i++) {
  modalCallbackOpenBtn[i].addEventListener('click', callbackModalOpenButtonClickHanlder)
} 

modalFeedbackCloseBtn.addEventListener('click', feedbackModalCloseButtonClickHanlder);
modalCallbackCloseBtn.addEventListener('click', callbackModalCloseButtonClickHanlder);
overlayModal.addEventListener('click', feedbackModalCloseButtonClickHanlder);
overlayModal.addEventListener('click', callbackModalCloseButtonClickHanlder);
document.addEventListener('keydown', escKeydownHandler);
