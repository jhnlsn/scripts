/*
 * async
 * https://github.com/johnymonster/scripts
 *
 * Copyright (c) 2012 johnymonster
 * Licensed under the MIT license.
 */
 var async = require('async');

exports.waterfall = function(callback) {
	var bar;
	async.waterfall([
	    function(callback){
	        callback(null, 'one', 'two');
	    },
	    function(arg1, arg2, callback){
	    	try{
    			bar.go;
    			console.log('here');
    			callback(null, 'three');
	    	} catch(e) {
    			callback(e);
	    	}
	    },
	    function(arg1, callback){
	    	console.log('here');
	        callback(null, 'awesome');
	    }
	], function (err, result) {
		console.log('last');
	   callback(err, result);
	});
}

exports.queue = function(callback) {

}