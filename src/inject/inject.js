// Send an event every time the body is clicked.
document.body.addEventListener('click', (e) => {
	chrome.extension.sendMessage({'analytics_event': 'test_id'}, function(response) {
	  alert('Sent event.')
	});
});
