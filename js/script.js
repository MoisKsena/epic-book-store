
import addPage from './modules/addPage.js';
import dataBooks from './modules/dataBooks.js';
import bookCardTemplate from './modules/bookCardTemplate.js';




if (document.querySelector(bookCardTemplate.wrap)) {
	const wrap = document.querySelector(bookCardTemplate.wrap);

	addPage(dataBooks.books, bookCardTemplate);
}



