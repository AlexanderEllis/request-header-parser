var http = require('http');



var server = http.createServer(function(req, res) {
	var system = req.headers['user-agent'];
	system = system.slice(system.indexOf('(') + 1, system.indexOf(')'));
	ip = req.connection.remoteAddress;
	language = req.headers['accept-language'];
	language = language.slice(0, language.indexOf(','));
	console.log(language);
	result = {
		ipaddress: ip,
		language: language,
		software: system
	}

	result = JSON.stringify(result);
	res.end(result);
});


var port = process.env.PORT || 3000;
server.listen(port, function(){
  console.log("Server listening at:" + port);
});