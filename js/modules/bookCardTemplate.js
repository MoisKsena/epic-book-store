




const bookCardTemplate = {
	wrap: '.js-catalog__list',
	tag: 'div',
	tagClass: 'product-card-mini',
	setContent: function(book) {
		return `<a href="" class="product-card-mini__img-wrap"><img src="${book.image}" alt="" class="product-card-mini__img"></a>
					<h2 class="product-card-mini__title">${book.name}</h2>
					<p class="product-card-mini__descr">${book.descr}</p>
					<div class="product-card-mini__price">${book.price} &#8381;</div>`;
	}
};


export default bookCardTemplate;