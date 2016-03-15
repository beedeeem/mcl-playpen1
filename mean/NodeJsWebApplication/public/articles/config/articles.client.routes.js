/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('articles')
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider
                        .when('/articles', {
                            templateUrl: 'articles/views/list-articles.client.view.html'
                        })
                        .when('/articles/create', {
                            templateUrl: 'articles/views/create-article.client.view.html'
                        })
                        .when('/articles/:articleId', {
                            templateUrl: 'articles/views/view-article.client.view.html'
                        })
                        .when('/articles/:articleId/edit', {
                            templateUrl: 'articles/views/edit-article.client.view.html'
                        });
                        
            }]);



