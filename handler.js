function home(response){
	console.log("home handler");
	response.writeHead(200, {
			"Content-Type" : "text/plain"
		});
		response.write("Home Page");
		response.end();
}

function review(response){
	console.log("review handler");
	response.writeHead(200, {
			"Content-Type" : "text/plain"
		});
		response.write("Review Page");
		response.end();
}

exports.home = home;
exports.review = review;