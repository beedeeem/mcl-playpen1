/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('core', [])
        .factory('currentSpot', currentSpot)
        .directive('ywActiveMenu', ywActiveMenu)
        .directive('ywMenuId', ywMenuId);

function currentSpot() {

    var activeMenuId = '';
    var titleText = '';

    return {
        setCurrentSpot: function (menuId, title) {
            console.log("setting active menu to " + menuId);
            activeMenuId = menuId;
            titleText = title;
        },
        getActiveMenu: function () {
            return activeMenuId;
        },
        getTitle: function () {
            return titleText;
        }
    };

}


function ywActiveMenu(currentSpot) {
    return function (scope, element, attrs) {
        var activeMenuId = attrs["ywActiveMenu"];
        var activeTitle = attrs["ywActiveTitle"];
        currentSpot.setCurrentSpot(activeMenuId, activeTitle);
        console.log("active menu is now " + currentSpot.getActiveMenu());

    };
}

function ywMenuId(currentSpot) {
    var menuElements = [];

    function setActive(element, menuId) {
        if (currentSpot.getActiveMenu() == menuId) {
            element.addClass('active');
        } else {
            element.removeClass('active');
        }
    }

    return function (scope, element, attrs) {
        var menuId = attrs["ywMenuId"];
        menuElements.push({id: menuId, node: element});

        var watcherFn = function (watchScope) {
            return watchScope.$eval('getActiveMenu()');
        }
        scope.$watch(watcherFn, function (newValue, oldValue) {
            for (var i = 0; i < menuElements.length; i++) {
                var menuElement = menuElements[i];
                setActive(menuElement.node, menuElement.id);
            }
        });
    }
}
