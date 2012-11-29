var http = require('http')
  , async = require('async')
  , format = require('util').format
  , createConnection = require('net').createConnection;

var concurrent = [];
http.Agent.maxSockets = 500;

var request = {
	total: 0,
	start: new Date().getTime(),
	end: 0
};

for(var i=0; i<40; i++) {
	setTimeout(function(){
		// goRequest(function(){
		// 			// console.log('done');
		// 		});
		goSock();
	},0);
}

function goSock() {
	var data = '';
	var req = format('GET %s HTTP/1.1\r\n', '/')
	    + format('Host: %s\r\n', 'www.npr.org')
	    + format('Accept-Encoding: gzip,compress\r\n')
	    // + format('Connection: keep-alive\r\n');
	    + 'Connection: close\r\n\r\n';
		var socket = createConnection('80', 'www.npr.org');
		  socket.on('connect', function () {
		    inRequest = true;
		    socket.write(req);
		  });
		  socket.on('data', function (chunk) {
		    data += chunk;
		  });
		  socket.once('end', function () {
		    request.total++;
		    console.log(request.total);
			if(request.total == 40) {
				request.end = new Date().getTime();
				console.log((request.end-request.start)/1000);
			}
		  });
		  socket.once('error', function (err) {
			console.log('error');
		  });
}


function getRequest() {
	http.get('http://www.npr.org',function(res){
		// console.log('get',res.statusCode);
		request.total++;
		// console.log(request);
		if(request.total == 40) {
			request.end = new Date().getTime();
			console.log((request.end-request.start)/1000);
		}
	})
}

function goRequest(cb) {

	var req = http.request({hostname:'www.npr.org'});
	req.setNoDelay();
	
	req.on('response',function(res){
		res.on('end',function(){
			request.total++;
			// console.log(request);
			if(request.total == 40) {
				request.end = new Date().getTime();
				console.log((request.end-request.start)/1000);
			}
			cb(null);
		})
		res.on('error', function(err) {
			console.log('error');
			request.total++;
			cb(err);
		})
	});
	
	req.on('error', function(err) {
		console.log('error');
		request.total++;
	});

	req.end();
}

