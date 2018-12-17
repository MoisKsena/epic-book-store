const pageManager = {
	prepare: function(type){
		const data = {
			page: 1,
			perPage: 8,
			type: ''
		};
		if(window.matchMedia("(min-width: 768px)").matches) {
			data.perPage = 8;
		} else {
			data.perPage = 3;
		}

		data.type = type || 'all';

		return data;
	},
  prepareUrl: function(type){
    const data = pageManager.prepare(type);

    return `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;
  },
  renderPageSwitch: function(page, isCurrent){
    let currentCssClass = isCurrent ? 'j-current' : '';

    return `<li class="page__list ${currentCssClass}"><a href="#" class="page__link">${page}</a></li>`;
  },
  renderPageSeparator: function(){
    return `<li class="page__separator">...</li>`;
  },
  renderPager: function(page, totalPages){
    let result = '';
    if(totalPages <= 7){
      for (let i = 0; i < totalPages; i++) {
        result += pageManager.renderPageSwitch(i+1, (i+1)===page);
      }
    }
    else{
      result += pageManager.renderPageSwitch(1, 1===page);
      if(page <= 4){
        for (let i = 1; i < 5; i++) {
          result += pageManager.renderPageSwitch(i+1, (i+1)===page);
        }
        result += pageManager.renderPageSeparator();

      }else if((page > 4) && (page < (totalPages - 4))){
        result += pageManager.renderPageSeparator();
        for (let i = -1; i <= 1; i++) {
          result += pageManager.renderPageSwitch(page+i, (page+i)===page);
        }
        result += pageManager.renderPageSeparator();
      }else{
        result += pageManager.renderPageSeparator();
        for (let i = 0; i < 4; i++) {
          let p = totalPages - 4;
          result += pageManager.renderPageSwitch(i+p, (i+p)===page);
        }

      }
      result += pageManager.renderPageSwitch(totalPages, totalPages===page);
    }

    return result;
  }

};

export default pageManager;
