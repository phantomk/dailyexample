var express = require("express");
var superagent = require("superagent");
var cheerio = require("cheerio");

var app = express();

app.get('/', function (req, res, next) {
    superagent.get('https://ruby-china.org/')
        .end(function (err, sres) {
            if (err) {
                return next(err);
            }

            var $ = cheerio.load(sres.text);
            var items = [];
            $('#main .media-heading a').each(function (idx, element) {
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: "https://ruby-china.org/" + $element.attr('href')
                });
            });

            res.send(items);
        });
});

app.listen(3000, function(){
    console.log("server listening on 3000 port")
});