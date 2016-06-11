var http = require('http');
var url = require('url');

function startServer(route,handle) {

	http.createServer(function (request, response) {
		var pathname = url.parse(request.url).pathname;
		route(handle,pathname,response);
	}).listen(8888);
	console.log("Port 8888 is listening...");
}

exports.startServer = startServer;
