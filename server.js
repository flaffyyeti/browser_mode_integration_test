var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up mocha_tests
var serve = serveStatic('mocha_tests', {'index': ['index.html']})

// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(3000, function()
{
	console.log('Listening on port 3000.');
});