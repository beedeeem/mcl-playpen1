/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('diveLog', [])
    .controller('diveLogCtrl', DiveLogCtrl)
    .factory('diveLogApi', diveLogApi);

function DiveLogCtrl($scope, diveLogApi) {
    $scope.dives = diveLogApi.getDives();
}

function diveLogApi() {
     
    var dives = [
        { 
            site: "Abu Gotta Ranada",
            location: "Hurghada, Egypt",
            depth: 72,
            time: 54
        },
        { 
            site: "Ponte Mahoon",
            location: "Maehbourg, Mauritius",
            depth: 53,
            time: 38
        },
        { 
            site: "Molnar Cave",
            location: "Budapest, Hungary",
            depth: 99,
            time: 163
        }
    ];

    return {
        getDives: function() {
            return dives;
        }
    }

}
