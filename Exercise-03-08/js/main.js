/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('main', ['ngRoute', 'core', 'maintenance'])
        .controller('adminCtrl', AdminCtrl)
        .controller('mainCtrl', MainCtrl)
        .config(routingController);

function AdminCtrl($scope, currentSpot) {
    $scope.isActive = isActive;
    $scope.getTitle = getTitle;
    $scope.getActiveMenu = getActiveMenu;

    function isActive(menuId) {
        return currentSpot.getActiveMenu() == menuId;
    }

    function getTitle() {
        return currentSpot.getTitle();
    }
    
    function getActiveMenu(){
        return currentSpot.getActiveMenu();
    }
    
}

function MainCtrl() {
}


function routingController($routeProvider) {
    $routeProvider.when('/locations', {
        templateUrl: 'views/locations.html',
        controller: 'locationsCtrl'
    });
    $routeProvider.when('/sites', {
        templateUrl: 'views/sites.html',
        controller: 'sitesCtrl'
    });
    $routeProvider.when('/types', {
        templateUrl: 'views/types.html',
        controller: 'typesCtrl'
    });
    $routeProvider.otherwise({
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
    });
};
