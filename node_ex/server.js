var http = require("http");
var url = require("url");

function start(route, handler) {
    http.createServer(function (request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("request received" + pathName);

        route(handler, pathName);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("hello word");
        response.end();
    }).listen(8888);

    console.log("server start");
}

exports.start = start;
