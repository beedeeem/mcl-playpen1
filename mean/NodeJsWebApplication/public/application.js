/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mainApplicationModuleName = "mean";

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'users', 'example', 'articles']);

mainApplicationModule.config(['$locationProvider',
    function($locationProvider) {
	$locationProvider.hashPrefix('!');
    }
]);

angular.element(document).ready(function () {
    angular.bootstrap(document, [mainApplicationModuleName]);
});





