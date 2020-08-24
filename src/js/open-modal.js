const modalFeedbackOpenBtn = document.querySelectorAll('.contacts__link--feedback');
const modalFeedback = document.querySelector('.modal-feedback');
const modalFeedbackCloseBtn = document.querySelector('.modal__close-feedback');
const overlayModal = document.querySelector('.overlay-modal');

const modalCallbackOpenBtn = document.querySelectorAll('.contacts__link--callback');
const modalCallback = document.querySelector('.modal-callback');
const modalCallbackCloseBtn = document.querySelector('.modal__close-callback');

const callbackInputFocus = modalCallback.querySelector('.form__input');
const feedbackInputFocus = modalFeedback.querySelector('.form__input');
const ESC_KЕYDOWN = 27;

function escKeydownHandler(evt) {
  if (evt.keyCode === ESC_KЕYDOWN) {
    if (modalFeedback.classList.contains('modal-feedback--active')){
      feedbackClose();
    }
    if (modalCallback.classList.contains('modal-callback--active')) {
      callbackClose();
    }
  }
};

//открывает модальное окно с обратной связью
function feedbackOpen() {
  modalFeedback.classList.add('modal-feedback--active');
  overlayModal.classList.add('overlay-modal--active');
  feedbackInputFocus.focus();
  document.addEventListener('keydown', escKeydownHandler);
}

//закрывает модальное окно с обратной связью
function feedbackClose() {
  modalFeedback.classList.remove('modal-feedback--active');
  overlayModal.classList.remove('overlay-modal--active');
}

//открывает модальное окно с обратным звонком
function callbackOpen() {
  modalCallback.classList.add('modal-callback--active');
  overlayModal.classList.add('overlay-modal--active');
  callbackInputFocus.focus();
  document.addEventListener('keydown', escKeydownHandler);
}

//закрывает модальное окно с обратным звонком
function callbackClose() {
  modalCallback.classList.remove('modal-callback--active');
  overlayModal.classList.remove('overlay-modal--active');
}

//слушатели
for (let j = 0; j < modalFeedbackOpenBtn.length; j++) {
  modalFeedbackOpenBtn[j].addEventListener('click',feedbackOpen);
}
for (let i = 0; i < modalCallbackOpenBtn.length; i++) {
  modalCallbackOpenBtn[i].addEventListener('click', callbackOpen)
} 

modalFeedbackCloseBtn.addEventListener('click', feedbackClose);
modalCallbackCloseBtn.addEventListener('click', callbackClose);
overlayModal.addEventListener('click', feedbackClose);
overlayModal.addEventListener('click', callbackClose);
