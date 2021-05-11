// Basic message handler.
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request);
	_gaq.push(['_trackEvent', request.aevent, 'clicked']);
    sendResponse();
  }
);

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXXXXX-XX']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
