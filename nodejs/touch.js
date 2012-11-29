var fs = require('fs');

setInterval(function(){
	fs.utimes('something',new Date(), new Date(),function(){
		console.log('done');
	});
},5000);