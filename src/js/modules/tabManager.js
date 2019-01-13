const tabManager = {
	wrap: '.j-tabs',
  hasTabs: function()
  {
    return document.querySelectorAll(tabManager.wrap);
  },
	addTabClickListener: function(listener) {

    $(tabManager.wrap).on('click', '.catalog__tab-link', function(evt)
    {
      $('.catalog__tab-link', tabManager.wrap).removeClass('j-active');
      $(this).addClass('j-active');
      listener(evt);
    });
	}
};

export default tabManager;
