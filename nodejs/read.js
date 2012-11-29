var http = require('http')
  , util = require('util');

var curtime = Math.floor(new Date().getTime()/1000);


setInterval(function(){
	http.get('http://www-cdn.npr.org/buckets/agg/series/2012/elections/riverofnews/riverofnews.jsonp',function(res){
		var time = new Date(res.headers['last-modified']).getTime()/1000;
		console.log(time, curtime);
		if(time > curtime) {
			console.log(time-curtime, 'seconds');
			curtime = time;
		}
	})
},1000);
