chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		/* jqueryrain remove button overlay */
		var class_name = 'no-ajaxy';
		var splitter = 'http://www.jqueryrain.com/?';

		var buttons = document.getElementsByClassName(class_name);
		if(buttons.length > 0){
			for(var i = 0; i < buttons.length; i++){
				var elemUrl = buttons[i].getAttribute('href');
				if(elemUrl.substr(0, splitter.length) == splitter){
					buttons[i].setAttribute('href', elemUrl.replace(splitter, ''));
				}
			}
		}
		/* end jqueryrain script frame removal */
	}
	}, 1);
});