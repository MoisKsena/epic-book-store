const requestManager = {
	send: function(data, onSuccess, onFail, successData) {
    $.ajax(data, {
      success: function(response, status, jqXhr)
      {
        onSuccess(response, successData)
      }
    });
	}
};

export default requestManager;
