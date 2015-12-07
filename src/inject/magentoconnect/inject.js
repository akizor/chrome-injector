chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		/* jqueryrain remove button overlay */
		var inputId = 'extension-key-input';
		var element = document.getElementById(inputId);
    if(element){
      /* free module here */
      var downloadUrl = false;
      console.log(document.getElementById('extension-key-input').value);
      if(downloadUrl){
        var btnContainer = document.getElementById('product-view-offers-purchasing');
        var htmlBtn = '<br /><div class="button-purchase download-files-btn"><a href="' + downloadUrl + '" class="ui-button ui-button-blue-huge" title=""><img src="http://icons.iconarchive.com/icons/saki/nuoveXT/32/Mimetypes-tgz-icon.png" width="30"/>Download Source Files</a></div>';
        btnContainer.innerHTML += htmlBtn;
        console.log(btnContainer);
      }

    }
		/* end jqueryrain script frame removal */
	}
	}, 1);
});
