chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		/* search for adf.ly urls and remove them */
		var adfly = document.getElementsByTagName('a');
		for (var i = 0; i < adfly.length; i++){
			var elemUrl = adfly[i].getAttribute('href');
			var is_adfly = false;
			if(elemUrl){
				urlElements = elemUrl.split('/');
				for(var j =0; j < urlElements.length; j++){
					if(urlElements[j] == "adf.ly"){
						is_adfly = true;
					}
				}
			}

			if(is_adfly){
				var adflyUrl = adfly[i].getAttribute('href').split('http://');
				if(adflyUrl[2]){
					adfly[i].setAttribute('href', 'http://' + adflyUrl[2]);
				}
			}
		}
		/* end adf.ly url changer */
	}
	}, 10);
});