import Swiper, {Pagination} from 'swiper';

Swiper.use([Pagination]);

let mySwiper;
function initSwiper() {
  const screenWidth = document.body.clientWidth;
  if ((screenWidth < 768) && (mySwiper == undefined)) {
    mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  } if ((screenWidth >= 768) && (mySwiper !== undefined)) {
    for (let i = 0; i < mySwiper.length; i++) {
    mySwiper[i].destroy(true, true);  
  }
    mySwiper = undefined;
      }
    }
initSwiper();

window.addEventListener('resize', function() {
  initSwiper();
});

/*
(function() {

  'use strict';
  const breakpoint = window.matchMedia( '(min-width:768px)' );

  let mySwiper;

 
  const breakpointChecker = function() {
    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

    for (let i = 0; i < mySwiper.length; i++)  {  
      // clean up old instances and inline styles when available
	  if ( mySwiper[i] !== undefined ) mySwiper[i].destroy(false, true);

	  // or/and do nothing
	  return;

      // else if a small viewport and single column layout needed
      } if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();

      }
    }
  };

  const enableSwiper = function() {
    mySwiper = new Swiper ('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  };

  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();

})();*/