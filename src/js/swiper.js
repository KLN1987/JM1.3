var mySwiper = undefined;
function initSwiper() {
  let screenWidth = screen.availWidth;
  if ( (screenWidth < 768) && (mySwiper == undefined)) {
    mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  } else if ((screenWidth >= 768) && (mySwiper != undefined)) {
    mySwiper.destroy();
    mySwiper = undefined;
    document.querySelector('.swiper-wrapper').removeAttribute('style');
    /*document.querySelector('.swiper-slide').style.height = 'auto';*/
  }
}
initSwiper();

window.addEventListener('resize', function() {
  initSwiper();
});