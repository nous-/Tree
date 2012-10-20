var http = require('http');
var sys = require("util");
var spawn = require('child_process').spawn;

http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n');
}).listen(process.env.PORT);



