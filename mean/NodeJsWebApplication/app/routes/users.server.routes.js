/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var users = require('../../app/controllers/users.server.controller'),
        passport = require('passport');

module.exports = function (app) {
//    app.route('/users')
//            .post(users.create)
//            .get(users.list);
//
//    app.route('/users/:userId')
//            .get(users.read)
//            .put(users.update)
//            .delete(users.delete);

    app.route('/signup')
            .get(users.renderSignup)
            .post(users.signup);

    app.route('/signin')
            .get(users.renderSignin)
            .post(passport.authenticate('local', {
                successRedirect: '/',
                failureRedirect: '/signin',
                failureFlash: true
            }));


    app.get('/signout', users.signout);

//    app.param('userId', users.userByID);

};


