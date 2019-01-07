import addPage from './modules/addPage.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import tabManager from './modules/tabManager.js';
import pageManager from './modules/pageManager.js';
import requestManager from './modules/requestManager.js';
import catalogManager from './modules/catalogManager.js';
import Swiper from '../../node_modules/swiper/dist/js/swiper.min.js';

if(tabManager.hasTabs()){
tabManager.addTabClickListener(function(event) {
      event.preventDefault();
      const url = pageManager.prepareUrl(event.target.dataset.type, 1);
      requestManager.send(url,
        pageManager.bookPage,
        function(xhr){
          console.log(`wait download: ${xhr.readyState}`);
        },
        {page: 1, type: event.target.dataset.type || 'all'});
  });


requestManager.send(pageManager.prepareUrl('all', 1),
  pageManager.bookPage,

  function(xhr){
    console.log(`wait download: ${xhr.readyState}`);
  },
  {page: 1, type: 'all'}
);
}


/*var mySwiper = new Swiper ('.slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    wrapperClass:'slider__inner',
    slideClass: 'slider__slide',
    effect: 'slide',


    breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is <= 1280px
    1280: {
      slidesPerView: 1,
      spaceBetween: 1000
    }
  },


    // Navigation arrows
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
    },

  })*/
var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


let burger = document.querySelector(".main-nav__burger");
let menu = document.querySelector(".main-nav__burger-menu");

burger.addEventListener('click', () => {

  burger.classList.toggle('active');
  menu.classList.toggle('active');
}, false);
