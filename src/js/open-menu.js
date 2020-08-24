const navigationOpenBtn = document.querySelector('.header__navigation-toggle-btn');
const navigationCloseBtn = document.querySelector('.side-menu__toggle-btn');
const sideMenu = document.querySelector('.side-menu');
const overlayMenu = document.querySelector('.overlay-menu');

const ESCAPE_KЕYDOWN = 27;

// открывает боковое меню
function openedSideMenu() {
  sideMenu.classList.add('side-menu__active');
  overlayMenu.classList.add('overlay-menu--active');
  document.addEventListener('keydown', escapeKeydownHandler);
}

// закрывает боковое меню
function closedSideMenu() {
  sideMenu.classList.remove('side-menu__active');
  overlayMenu.classList.remove('overlay-menu--active');
}

//закрытие на ESC
function escapeKeydownHandler(evt) {
  if (evt.keyCode === ESCAPE_KЕYDOWN) {
    closedSideMenu();
  }
};
 
//слушатели
navigationOpenBtn.addEventListener('click', openedSideMenu);
navigationCloseBtn.addEventListener('click', closedSideMenu);
overlayMenu.addEventListener('click', closedSideMenu);
