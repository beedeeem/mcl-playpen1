/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('app', ['ngRoute','ngSanitize','7minWorkout'])
        .config(function($routeProvider, $sceDelegateProvider) {
            $routeProvider.when('/start', { 
                templateUrl: 'partials/start.html'
            });
            $routeProvider.when('/workout', { 
                templateUrl: 'partials/workout.html',
                controller: 'WorkoutController'
            });
            $routeProvider.when('/finish', { 
                templateUrl: 'partials/finish.html'
            });
            $routeProvider.otherwise({
                redirectTo: '/start'
            });
            
            //allow same origin resource loads
            $sceDelegateProvider.resourceUrlWhitelist([
                'self',
                'http://*.youtube.com/**'
            ]);
        });            

angular.module('7minWorkout', []);
