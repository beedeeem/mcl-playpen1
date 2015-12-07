/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic("../Exercise-01-01"));
app.listen(5100);


