const tabManager = {
	wrap: '.j-tabs',
	addTabClickListener: function(listener) {
		let tabsWrap = document.querySelector(tabManager.wrap);
		let tabsArray = Array.from(tabsWrap.children);
		tabsArray.forEach(function(tab) {
			const link = tab.firstElementChild;
			link.addEventListener('click', listener);
		});

	}
};

export default tabManager;