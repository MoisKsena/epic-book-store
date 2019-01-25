const bookCardTemplate = {
	wrap: '.js-catalog',
	tag: 'div',
	tagClass: 'book-card',
	setContent: function(book) {
		return `<div class="book-card__inner">
              <a href="books_inner.html" class="book-card__img-wrap">
                <picture>
                  <img src="img//booksAll/${book.uri}.jpg" alt="lateralnaya-logika" class="book-card__img">
                </picture>
              </a>
              <div class="book-card__story">
      					<h2 class="book-card__title">${book.name}</h2>
      					<p class="book-card__descr">${book.desc}</p>
					      <span class="book-card__price">${book.price} &#8381;</span>
              </div>
            </div>`;
	}
};


export default bookCardTemplate;
