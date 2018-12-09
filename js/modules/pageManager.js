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
		data.type = type;

		return data;
	}
};

export default pageManager;