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


var mongoose = require('mongoose');
var postFind = require('mongoose-post-find');
var async = require('async');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    members: {
        type: [Schema.Types.Mixed]
    }
});

function _attachMembers (Employee, result, callback) {
    Employee.find({
        team: result._id
    }, function(error, employees) {
        if (error) {
            return callback(error);
        }
        
        result.members = employees;
        callback(null, result);
    });
};

TeamSchema.plugin(postFind, {
    find: function( result, callback) {
        var Employee = mongoose.model('Employee');
        
        async.each(result, function(item, callback) {
            _attachMembers(Employee, item, callback);
        }, function (error) {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    findOne: function (result, callback) {
        var Employee = mongoose.model('Employee');
        
        _attachMembers(Employee, result, callback);
    }
});

module.exports = mongoose.model('Team', TeamSchema);



