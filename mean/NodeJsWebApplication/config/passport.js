/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var passport = require('passport'),
        mongoose = require('mongoose');

module.exports = function() {
    var User = mongoose.model('User');
    
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        User.findOne({
            _id: id
        }, '-password -salt', 
        function(err, user) {
                done(err, user);
            });
    });
    
    require('./strategies/local.js')();
};

