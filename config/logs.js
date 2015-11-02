/**
 * Created by kodevz on 8/3/15.
 */
  'use strict';
  module.exports = function(app){
    app.log_JF = function(type,message){
      if(type=='error'){
        console.log("XXXXXXXXXXXXXX");
        console.log(message);
        console.log("XXXXXXXXXXXXXX");
      }else if(type=="success"){
        console.log("//////////////");
        console.log(message);
        console.log("//////////////");
      }else if(type=="message"){
        console.log("@@@@@@@@@@@@@@@");
        console.log(message);
        console.log("@@@@@@@@@@@@@@@");
      }

    }
  };
