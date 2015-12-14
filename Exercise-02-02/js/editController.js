/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('maintenance', [])
        .controller('siteEditCtrl', SiteEditCtrl);

function SiteEditCtrl($scope) {
    $scope.sites = sites;
    setView('list');
    
    function setView(view) {
        $scope.view = view;
    } 
}


