const bookCardTemplate = {
	wrap: '.js-catalog__list',
	tag: 'div',
	tagClass: 'book-card',
	setContent: function(book) {
		return `<a href="" class="book-card__img-wrap"><img src="/img/booksAll/${book.uri}.png" alt="" class="product-card-mini__img"></a>
					<h2 class="book-card__title">${book.name}</h2>
					<p class="book-card__descr">${book.desc}</p>
					<div class="book-card__price">${book.price} &#8381;</div>`;
	}
};


export default bookCardTemplate;
