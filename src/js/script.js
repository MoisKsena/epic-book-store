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



var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-btnnext',
        prevEl: '.swiper-btnprev',
      },
    });


function hideMenu() {
  $('.main-nav__burger').hide();
  $('.main-nav__burger-menu').hide();
}

function toggleMenu() {
  $('.main-nav__burger').toggle();
  $('.main-nav__burger-menu').toggle();
}

$('.main-nav__burger').click(function()
  {
    toggleMenu();
  });

if(window.matchMedia("(min-width: 420px)").matches)
{
 hideMenu();
}
else{
 toggleMenu();
}



