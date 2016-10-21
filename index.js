var express = require('express');
var server = express();
var logger = require('./middleware/logger.js');
var cors = require('cors');




var forecasterRouter = require('./routers/forecast.router.js');
var indexRouter = require('./router/index.router.js');

var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/public'));
server.use(logger);
server.use(cors());


server.use(indexRouter);
server.use(forecasterRouter);


server.listen(port, function(){
   console.log('Now listening on port');

});
