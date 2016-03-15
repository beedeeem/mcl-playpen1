/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('example').controller('ExampleController', ['$scope', 'Authentication',
    function ($scope, Authentication) {
        // Get the user's 'fullName' 
        $scope.authentication = Authentication;
    }
]);

