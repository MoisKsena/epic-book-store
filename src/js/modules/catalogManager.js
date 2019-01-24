const catalogManager = {
	wrap: '.js-catalog',
  getElements: function(selector)
  {
    var div_list = document.querySelectorAll(selector); // returns NodeList
    return Array.prototype.slice.call(div_list);
  },
	addTabClickListener: function(listener) {
		alert('catalog');

    let tabsArray = catalogManager.getElements(catalogManager.wrap);

		tabsArray.forEach(function(tab) {
			const link = tab.firstElementChild;
			link.addEventListener('click', listener);
		});

	}
};

export default catalogManager;
