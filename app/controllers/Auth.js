/**
 * Created by kodevz on 8/5/15.
 */

'use strict';
module.exports = function(app){

  app.controllers._doSignIn = function(req,res){
    res.send("Doing Login");
  }
};

