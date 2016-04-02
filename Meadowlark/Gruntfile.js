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

module.exports = function (grunt) {

    //load plugins
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec'
    ].forEach(function (task) {
        grunt.loadNpmTasks(task);
    });

    //configure plugins
    grunt.initConfig({
        cafemocha: {
            all: {  src: 'qa/tests-*.js', options: {'ui': 'tdd'} }
        },
        jshint: {
            app: [  'meadowlark.js',
                    'public/js/**/*.js',
                    'lib/**/*.js'  ],
            qa: [   'Gruntfile.js',
                    'public/qa/**/*.js' ]
        },
        exec: {
            linkchecker: {  cmd: '"c:\Program Files (x86)\LinkChecker\linkchecker.exe" http://localhost:3000'}
        }
    });
    
    grunt.registerTask('default', ['cafemocha','jshint','exec']);
    
};



