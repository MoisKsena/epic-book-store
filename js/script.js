
import addPage from './modules/addPage.js';
import dataBooks from './modules/dataBooks.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import tabManager from './modules/tabManager.js';
import pageManager from './modules/pageManager.js';
import requestManager from './modules/requestManager.js';



tabManager.addTabClickListener(function(event) {
		event.preventDefault();
		const data = pageManager.prepare(event.target.dataset.type);
		const dataAjax = `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;
		requestManager.send(dataAjax, function(response) {
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

//ajax obj
const data = {
  page : 1,
  perPage: 8,
  type: ''
};

requestManager.send(createDataAjax(), function(response) {
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

//listener
const tabsWrap = document.querySelector('.js-catalog__list');
const tabsArray = Array.from(tabsWrap.children);

tabsArray.forEach(function(tab) {
  const link = tab.firstElementChild;
  link.addEventListener('click', function(event){
    event.preventDefault();
    data.type = event.target.dataset.type;

    const dataAjax = createDataAjax();

    sendRequest(dataAjax);
  });
});

// create url get
function createDataAjax() {

  if (window.matchMedia("(min-width: 768px)").matches) {
    data.perPage = 8;
  } else {
    data.perPage = 3;
  }

  return `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;
}
