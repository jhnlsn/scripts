define(['jquery'], function(){
	console.log('jquery has loaded and this is a simple module');
	var module = {
		init: function() {
			console.log('init');
		}
	};
	return module;
});