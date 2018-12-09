const requestManager = {
	send: function(data, onSuccess, onFail) {
		let xhr = new XMLHttpRequest;

		xhr.open('GET', data);

		xhr.send();

		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4 && xhr.status === 200) {

        const responseObj = JSON.parse(xhr.responseText);
				onSuccess(xhr.responseText);
			} else {
				onFail(xhr);
			}
		}
	}
};

export default requestManager;
