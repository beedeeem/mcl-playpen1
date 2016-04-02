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

var fs = require('fs');

exports.send404 = send404;
exports.sendJson = sendJson;
exports.send500 = send500;
exports.staticFile = staticFile;

function send404(response) {
    console.error("Resource not found");
    response.writeHead(404, {
        'Content-Type': 'text/plain'
    });
    response.end('Not Found');
};

function sendJson(data, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(data));
};

function send500(data, response) {
    console.error(data.red);
    response.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    response.end(data);
};

function staticFile(staticPath) {
  return function(data, response) {
    var readStream;

    // Fix so routes to /home and /home.html both work.
    data = data.replace(/^(\/home)(.html)?$/i,'$1.html');
    data = '.' + staticPath + data;

    fs.stat(data, function (error, stats) {

      if (error || stats.isDirectory()) {
        return exports.send404(response);
      }

      readStream = fs.createReadStream(data);
      return readStream.pipe(response);
    });
  }
}


