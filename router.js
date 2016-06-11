function route(handle, pathname,response){
	console.log("Routing a request for :" + pathname);
	if(typeof(handle[pathname]) === "function"){
		handle[pathname](response);
	}
	else{
		console.log("No handle for this url");
		response.writeHead(404, {
			"Content-Type" : "text/plain"
		});
		response.write("Error 404 Page Not Found.");
		response.end();
	}
}

exports.route = route;