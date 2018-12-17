import addPage from './modules/addPage.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import tabManager from './modules/tabManager.js';
import pageManager from './modules/pageManager.js';
import requestManager from './modules/requestManager.js';
import catalogManager from './modules/catalogManager.js';



tabManager.addTabClickListener(function(event) {
      event.preventDefault();
      const url = pageManager.prepareUrl(event.target.dataset.type);
      requestManager.send(url, function(response) {
      const request = JSON.parse(response);

      const wrap = document.querySelector(bookCardTemplate.wrap);

      if (wrap.children){
        wrap.innerHTML = '';
      }

      if (document.querySelector(bookCardTemplate.wrap)) {
        console.log(request.items);
        addPage(request.items, bookCardTemplate);
      }
    },
    function(xhr){
      console.log(`wait dawnload: ${xhr.readyState}`);
    });
  });


requestManager.send(pageManager.prepareUrl(), function(response) {
    const request = JSON.parse(response);
    const wrap = document.querySelector(bookCardTemplate.wrap);

    if (wrap.children){
      wrap.innerHTML = '';
    }

    if (document.querySelector(bookCardTemplate.wrap)) {
      console.log(request.items);
      addPage(request.items, bookCardTemplate);
    }
  },

  function(xhr){
    console.log(`wait dawnload: ${xhr.readyState}`);
  }
);

/*catalogManager.addTabClickListener(function(event){
    event.preventDefault();

    const url = pageManager.prepareUrl(event.target.dataset.type);

    requestManager.send(url);

  });
*/
/*swiper*/

  var mySwiper = new Swiper ('.slider', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
   /* pagination: {
      el: '.slider__pagination',
    },*/

    // Navigation arrows
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
    },

    // And if we need scrollbar
   /* scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  })

