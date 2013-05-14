var express = require('express')
  , app = express();

app.use('/test',require('./express_module'));

app.listen(3000);