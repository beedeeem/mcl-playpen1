/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('example')
        .config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'example/views/example.client.view.html'
            })
            .otherwise({
                redirectTo: '/'
            });
        }
    ]);




