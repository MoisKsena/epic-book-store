const tabManager = {
	wrap: '.j-tabs',
  hasTabs: function()
  {
    return document.querySelectorAll(tabManager.wrap);
  },
  getChildren: function(selector)
  {
    var div_list = document.querySelector(selector); // returns NodeList
    return Array.prototype.slice.call(div_list.children);
  },
	addTabClickListener: function(listener) {
		let tabsArray = tabManager.getChildren(tabManager.wrap);
		tabsArray.forEach(function(tab) {
			const link = tab.firstElementChild;
			link.addEventListener('click', listener);
		});

	}
};

export default tabManager;
