var express = require('express')
  , another = require('./another');

app = exports = module.exports = express();

app.get('/',function(req, res){
  console.log(another);
  res.json(200, {hi: 'there'});
})