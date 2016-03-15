/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('articles')
        .factory('Articles', ['$resource', function ($resource) {
                return $resource('api/articles/:articleId', {
                    articleId: '@_id'
                }, 
                {
                    update: {
                        method: 'PUT'
                    }
                });
            }]);


