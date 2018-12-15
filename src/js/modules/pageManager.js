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
  }
};

export default pageManager;
