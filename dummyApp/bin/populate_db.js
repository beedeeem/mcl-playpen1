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

var async = require('async');
var mongoose = require('mongoose');
require('../lib/connection');

var Employee = mongoose.model('Employee');
var Team = mongoose.model('Team');

var data = {
    employees: [
        {
            id: '1000003',
            name: {
                first: 'Colin',
                last: 'Ihrig'
            },
            image: 'images/employees/1000003.png',
            address: {
                lines: ['11 Wall Street'],
                city: 'New York',
                state: 'NY',
                zip: 10118
            }
        }, 
        {
            id: '1000021',
            name: {
                first: 'Adam',
                last: 'Bretz'
            },
            address: {
                lines: ['46 18th St', 'St. 210'],
                city: 'Pittsburgh',
                state: 'PA',
                zip: 15222
            }
        },
        {
            id: '1000022',
            name: {
                first: 'Matt',
                last: 'Liegey'
            },
            address: {
                lines: ['2 S Market Square', '(Market Square)'],
                city: 'Pittsburgh',
                state: 'PA',
                zip: 15222
            }
        },
        {
            id: '1000025',
            name: {
                first: 'Aleksey',
                last: 'Smolenchuk'
            },
            image: 'images/employees/1000025.png' /* invalid image */,
            address: {
                lines: ['3803 Forbes Ave'],
                city: 'Pittsburgh',
                state: 'PA',
                zip: 15213
            }
        },
        {
            id: '1000030',
            name: {
                first: 'Sarah',
                last: 'Gay'
            },
            address: {
                lines: ['8651 University Blvd'],
                city: 'Pittsburgh',
                state: 'PA',
                zip: 15108
            }
        },
        {
            id: '1000031',
            name: {
                first: 'Dave',
                last: 'Beshero'
            },
            address: {
                lines: ['1539 Washington Rd'],
                city: 'Mt Lebanon',
                state: 'PA', zip: 15228
            }
        }
    ],
    teams: [
        {
            name: 'Software and Services Group'
        },
        {
            name: 'Project Development'
        }
    ]
};

var deleteEmployees = function (callback) {
    console.info('Deleting Employees');
    Employee.remove({}, function (error, response) {
        if (error) {
            console.error('Error deleting employees ' + error);
        }

        console.info('Done deleting employees');
        callback();
    });
};

var addEmployees = function (callback) {
    console.info('Adding employees');
    Employee.create(data.employees, function (error) {
        if (error) {
            console.error('Error: ' + error);
        }

        console.info('Done adding employees');
        callback();
    });
};

var deleteTeams = function (callback) {
    console.info('Deleting teams');
    Team.remove({}, function (error, response) {
        if (error) {
            console.error('Error deleting teams: ' + error);
        }

        console.info('Done deleting teams');
        callback();
    });
};

var addTeams = function (callback) {
    console.info('Adding teams');
    Team.create(data.teams, function (error, team1) {
        console.log('just started add teams callback for ' + team1._id);
        if (error) {
            console.error('Error: ' + error);
        } else {
            data.team_id = team1._id;
            console.log('adding team id attribute for ' + team1._id + " "+ data.team_id);
        }

        console.info('Done adding teams');
        callback();
    });
};

var updateEmployeeTeams = function (callback) {
    console.info('Updating employee teams');
    var team = data.teams[0];
    console.log(team.name);
    console.log(data.team_id);

    Employee.update({}, {
        team: data.team_id
    }, {
        multi: true
    }, function (error, numberAffected, response) {
        if (error) {
            console.error('Error Upating employee team: ' + error);
        }

        console.info('Done updating employee teams');
        callback();
    });
};

async.series(
        [
            deleteEmployees,
            deleteTeams,
            addEmployees,
            addTeams,
            updateEmployeeTeams
        ],
        function (error, results) {
            if (error) {
                console.error('Error : ' + error);
            }

            mongoose.connection.close();
            console.log('Done');
        });
