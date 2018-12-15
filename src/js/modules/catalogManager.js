const catalogManager = {
	wrap: '.js-catalog__list',
	addTabClickListener: function(listener) {
		let tabsWrap = document.querySelector(catalogManager.wrap);
		let tabsArray = Array.from(tabsWrap.children);
		tabsArray.forEach(function(tab) {
			const link = tab.firstElementChild;
			link.addEventListener('click', listener);
		});

	}
};

export default catalogManager;
