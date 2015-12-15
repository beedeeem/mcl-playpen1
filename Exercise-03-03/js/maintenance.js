/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('maintenance', ['ngRoute'])
        .controller('adminCtrl', AdminCtrl)
        .config(routingController);


function AdminCtrl($scope) {
    
}

function routingController ($routeProvider) {
    $routeProvider.when('/locations', {
        templateUrl: 'views/locations.html'
    });
    $routeProvider.when('/sites', {
        templateUrl: 'views/sites.html'
    });
    $routeProvider.otherwise({
        templateUrl: 'views/main.html'
    });
};




