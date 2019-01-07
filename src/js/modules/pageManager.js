import addPage from './addPage.js';
import bookCardTemplate from './bookCardTemplate.js';
import requestManager from './requestManager.js';

const pageManager = {
  pagerListSelector: '.page__inner',
  bookPage: function(books, requestData){
    const totalPages = Math.ceil (books.count / pageManager.getPageSize());

    const wrap = document.querySelector(bookCardTemplate.wrap);

    if (wrap.children){
      wrap.innerHTML = '';
    }

    if (document.querySelector(bookCardTemplate.wrap)) {
      console.log(books.items);

      var pi = document.querySelector(pageManager.pagerListSelector);
      pi.innerHTML = pageManager.renderPager(requestData.page, totalPages, requestData.type);
      pageManager.addPageClickListener();

      addPage(books.items, bookCardTemplate);
    }
  },

  addPageClickListener:  function()
  {
    var pageLinks = document.querySelectorAll('.page__link');
    for(let i = 0; i < pageLinks.length; i++)
    {
      const pageLink = pageLinks[i];
      pageLink.addEventListener('click', pageManager.handlePageClick);
    }
  },

  getPageSize: function () {
    if(window.matchMedia("(min-width: 768px)").matches) {
      return 8;
    } else {
      return 3;
    }
  },

	prepare: function(type, page){
		return {
			page: page || 1,
			perPage: pageManager.getPageSize(),
			type: type || 'all'
		};
	},

  prepareUrl: function(type, page){
    const data = pageManager.prepare(type, page);

    return `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;
  },

  handlePageClick: function(evt){
    evt.preventDefault();
    const pageLink = evt.currentTarget;
    const page = parseInt(pageLink.dataset.page);
    const type = pageLink.dataset.type;

    requestManager.send(pageManager.prepareUrl(type, page),
      pageManager.bookPage,

      function(xhr){
        console.log(`wait download: ${xhr.readyState}`);
      },
      {page: page, type: type}
    );

  },

  renderPageSwitch: function(page, isCurrent, type){
    let currentCssClass = isCurrent ? 'j-current' : '';

    return `<li class="page__list ${currentCssClass}"><a href="#" class="page__link" data-page="${page}" data-type="${type}"  >${page}</a></li>`;
  },

  renderPageSeparator: function(){
    return `<li class="page__separator">...</li>`;
  },

  renderPager: function(page, totalPages, type){
    let result = '';
    if(totalPages <= 7){
      for (let i = 0; i < totalPages; i++) {
        result += pageManager.renderPageSwitch(i+1, (i+1)===page, type);
      }
    }
    else{

      result += pageManager.renderPageSwitch(1, 1===page, type);
      if(page <= 4){
        for (let i = 1; i < 5; i++) {
          result += pageManager.renderPageSwitch(i+1, (i+1)===page, type);
        }
        result += pageManager.renderPageSeparator();

      }else if((page > 4) && (page <= (totalPages - 4))){
        result += pageManager.renderPageSeparator();
        for (let i = -1; i <= 1; i++) {
          result += pageManager.renderPageSwitch(page+i, (page+i)===page, type);
        }
        result += pageManager.renderPageSeparator();
      }else{
        result += pageManager.renderPageSeparator();
        for (let i = 0; i < 4; i++) {
          let p = totalPages - 4;
          result += pageManager.renderPageSwitch(i+p, (i+p)===page, type);
        }

      }
      result += pageManager.renderPageSwitch(totalPages, totalPages===page, type);
    }

    return result;
  }

};

export default pageManager;
