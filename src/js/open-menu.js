var navigationOpenBtn = document.querySelector('.header__navigation-toggle-btn');
var navigationCloseBtn = document.querySelector('.side-menu__toggle-btn');
var sideMenu = document.querySelector('.side-menu');
var overlayMenu = document.querySelector('.overlay--menu');

const WIDTH_SCREEN = 1440;


// открывает боковое меню
function sideMenuModalOpenButtonClickHanlder() {
  sideMenu.classList.add('side-menu--active');
  overlayMenu.classList.add('overlay--active');
}

// закрывает боковое меню
function sideMenuModalCloseButtonClickHanlder() {
  sideMenu.classList.remove('side-menu--active');
  overlayMenu.classList.remove('overlay--active');
}

//убирает все классы сайд-меню на десктопе
function removeClass() {
  if(window.innerWidth >= WIDTH_SCREEN) {
    sideMenuModalCloseButtonClickHanlder();
  }
}
removeClass();

//слушатели
navigationOpenBtn.addEventListener('click', sideMenuModalOpenButtonClickHanlder);
navigationCloseBtn.addEventListener('click', sideMenuModalCloseButtonClickHanlder);
overlayMenu.addEventListener('click', sideMenuModalCloseButtonClickHanlder);
window.addEventListener('resize', removeClass);
