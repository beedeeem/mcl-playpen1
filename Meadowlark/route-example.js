/* 
 * Copyright 2016 bdmills.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var app = require('express')();

app.use(function(req, res, next) {
    console.log('\n======================================================\nalways\n');
    next();
});

app.get('/a', function(req, res, next) {
    console.log('route A terminated - no next!');
    res.send('a');
});

app.get('/a', function(req, res, next) {
    console.log('route A never appears');
});

app.get('/b', function(req, res, next) {
    console.log('route B not terminated');
    next();
});

app.use(function(req, res, next) {
    console.log('sometimes');
    next();
});

app.get('/b', function(req, res, next) {
    console.log('B (part 2) - throwing an error');
    throw new Error('b failed');
});

app.use('/b', function(err, req, res, next) {
    console.log('B error handling and passed on ');
    next(err);
});

app.get('/c', function(err, req) {
    console.log('C error thrown');
    throw new Error('c failed');
});

app.use('/c', function(err, req, res, next) {
    console.log('C error handling but not passed on ');
    next();
});

app.use(function(err, req, res, next) {
    console.log('unhandled error detected: ' + err.message);
    res.send('500 - server error');
});

app.use(function (req, res) {
    console.log('route not handled');
    res.send('404 - sever error');
});

app.listen(3000, function() {
    console.log('listening on port 3000');
});





