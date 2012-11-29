requirejs.config({
	baseUrl: 'components',
	paths: {
		app: '../js/app'
	}
});

requirejs(['app/simple'], function(a){
	console.log(a);
})