'use strict';

module.exports = function(db){
  db.connect('mongodb://jb:kodevz@ds053597.mongolab.com:53597/job-finder-dev');


  db.connection.on('connected', function () {
    console.log('Mongoose default connection open to ');
  });

  // If the connection throws an error
  db.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
  });

  // When the connection is disconnected
  db.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
  });
};

