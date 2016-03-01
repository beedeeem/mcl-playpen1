/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//angular.module('7minWorkout').filter('secondsToTime', function() {
//   return function(input) {
//       var sec = parseInt(input, 10);
//       if (isNan(sec)) return "00:00:00";
//       
//       var hours = Math.floor(sec / 3600);
//       var minutes = Math.floor((sec - (hours * 3600)) / 60);
//       var seconds = sec - (hours * 3600) - (minutes *60);
//       
//       return   ("0" + hours).substr(-2) + ":" + 
//                ("0" + minutes).substr(-2) + ":" +
//                ("0" + seconds).substr(-2);
//   } 
//});

angular.module('7minWorkout')
        .filter('secondsToTime', function () {
    return function (input) {
        var sec = parseInt(input, 10);
        if (isNaN(sec)) return "00:00:00";

        var hours = Math.floor(sec / 3600);
        var minutes = Math.floor((sec - (hours * 3600)) / 60);
        var seconds = sec - (hours * 3600) - (minutes * 60);

        return ("0" + hours).substr(-2) + ':'
                + ("0" + minutes).substr(-2) + ':'
                + ("0" + seconds).substr(-2);
    }
})
        .filter('myLineBreaksFilter', function() {
    return function(input) {
        return input.replace(/\./g, ".<br/><br/>");
    }    
});


