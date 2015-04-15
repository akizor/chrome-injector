chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		/* superweb remove overlay */
		var class_name = 'all';
		var overlay = document.getElementsByClassName(class_name);
		if(overlay.length > 0){
			overlay[0].parentNode.removeChild(overlay[0]);
		}
		/* end superweb removal */
	}
	}, 1);
});