function route(handle, pathName){
    console.log("router a require to " + pathName);
    if (typeof handle["pathName"] == 'function'){
        handle[pathName]();
    }else{
        console.log("no request handle for " + pathName);
    }
}

exports.route = route;