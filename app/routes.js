/**
 * Created by kodevz on 8/5/15.
 */

'use strict';

module.exports = function(app,router){


  router
    .route('/login')
    .post(app.controllers._doSignIn);


};
