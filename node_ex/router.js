function route(handler, pathName, response, request){
    console.log("router a require to " + pathName);
    if (typeof handler[pathName] == 'function'){
        handler[pathName](response, request);
    }else{
        console.log("no request handle for " + pathName);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;