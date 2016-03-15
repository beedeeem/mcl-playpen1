/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.exports = function(app) {
  
  var index = require('../controllers/index.server.controller');
  
  app.get('/',index.render);
    
};

