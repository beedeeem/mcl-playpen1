/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

var http = require('http');
var employeeService = require('./lib/employees');
var responder = require('./lib/responseGenerator');
var staticFile = responder.staticFile('/public');

http.createServer(function (req, res) {
    var _url;
    
    console.log(_url);
    req.method = req.method.toUpperCase();
    console.log(req.method + " " + req.url);
    
    if (req.method !== 'GET') {
        res.writeHead(501, {
            'Content-Type': 'text/plain'
        });
        return res.end(req.method + ' is not supported yet');
    };
    
    if (_url = /^\/employees$/i.exec(req.url)) {
        employeeService.getEmployees(function(err,data) {
            if (err) {
                return responder.send500(err, res);
            }
            return responder.sendJson(data, res);
        });
    } else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
        employeeService.getEmployee(_url[1], function (err, data) {
            if (err) {
                return responder.send500(err, res);
            }
            
            if (!data) {
                return responder.send404(res);
            }
            return responder.sendJson(data, res);
        });
    } else {
        // try a static file
        res.writeHead(200);
        res.end('a static file maybe');
    }

    
}).listen(1337, '127.0.0.1');

console.log('Server running at http://localhost:1337');

