/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('maintenance', [])
        .controller('adminCtrl', AdminCtrl);

function AdminCtrl($scope) {
    
    $scope.activeMenu = '';
    $scope.isActive = isActive;
    $scope.showMain = showMain;
    $scope.showLocations = showLocations;
    $scope.showDiveSites = showDiveSites;
    
    $scope.showMain();
    
    function setView(view, menuId) {
        $scope.view = view;
        $scope.activeMenu = menuId;
    }
    
    function isActive(menuId) {
        return $scope.activeMenu == menuId;
    }
    
    function showMain() {
        setView('main', '');
    }
    
    function showLocations() {
        setView('locations', 'Locations');
    }
    
    function showDiveSites() {
        setView('diveSites', 'Sites');
    }
}

