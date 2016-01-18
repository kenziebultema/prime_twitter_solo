/**
 * Created by ulaeulaeulae on 1/11/16.
 */
var express = require('express');
var index = require('../routes/index');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use('/', index);

var server = app.listen(5000, function(){
    var port = server.address().port;
    console.log('listening on port', port);
});

module.exports = app;