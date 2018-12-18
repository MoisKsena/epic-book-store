import addPage from './modules/addPage.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import tabManager from './modules/tabManager.js';
import pageManager from './modules/pageManager.js';
import requestManager from './modules/requestManager.js';
import catalogManager from './modules/catalogManager.js';

function bookPage(response){
  const request = JSON.parse(response);

  const wrap = document.querySelector(bookCardTemplate.wrap);

  if (wrap.children){
    wrap.innerHTML = '';
  }

  if (document.querySelector(bookCardTemplate.wrap)) {
    console.log(request.items);
    addPage(request.items, bookCardTemplate);
  }
}

tabManager.addTabClickListener(function(event) {
      event.preventDefault();
      const url = pageManager.prepareUrl(event.target.dataset.type);
      requestManager.send(url,
        bookPage,
        function(xhr){
          console.log(`wait download: ${xhr.readyState}`);
        });
  });


requestManager.send(pageManager.prepareUrl(),
  bookPage,

  function(xhr){
    console.log(`wait download: ${xhr.readyState}`);
  }
);

var pi = document.querySelector('.page__inner');
pi.innerHTML = pageManager.renderPager(17,25);


/*swiper*/

  /*var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,*/

    // If we need pagination
   /* pagination: {
      el: '.slider__pagination',
    },*/

    // Navigation arrows
    /*navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
    },*/
    // And if we need scrollbar
   /* scrollbar: {
      el: '.swiper-scrollbar',
    },*/

/*  });*/

