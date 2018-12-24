import addPage from './modules/addPage.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import tabManager from './modules/tabManager.js';
import pageManager from './modules/pageManager.js';
import requestManager from './modules/requestManager.js';
import catalogManager from './modules/catalogManager.js';
import Swiper from '../../node_modules/swiper/dist/js/swiper.min.js';



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



var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

let burger = document.querySelector(".main-nav__burger");
let menu = document.querySelector(".main-nav__burger-menu");

burger.addEventListener('click', () => {

  burger.classList.toggle('active');
  menu.classList.toggle('active');
}, false);