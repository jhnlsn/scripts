var Crawler = require("simplecrawler").Crawler
  , fs = require('fs')
  , crawl = new Crawler('www.npr.org');
crawl.on("fetchcomplete",function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)",queueItem.url,responseBuffer.length);
    // console.log("It was a resourc of type %s",response.headers['content-type']);
    fs.appendFile('urls.txt',queueItem.url + '\n');
});
crawl.start();