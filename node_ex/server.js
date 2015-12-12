var http = require("http");
var url = require("url");

function start(route, handler) {
    http.createServer(function (request, response) {
        var postData = "";
        var pathName = url.parse(request.url).pathname;
        console.log("request received" + pathName);

        route(handler, pathName, response, request);
        //request.setEncoding("utf8");
        //
        //request.addListener("data", function(postDataChunk) {
        //    postData += postDataChunk;
        //    console.log("Received POST data chunk '"+
        //        postDataChunk + "'.");
        //});
        //
        //request.addListener("end", function() {
        //    route(handler, pathName, response, postData);
        //});

    }).listen(8888);

    console.log("server start");
}

exports.start = start;
