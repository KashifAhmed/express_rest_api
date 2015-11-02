(function(){
    'use strict';
    module.exports=function(db,app){
        app.controllers={};
        app.db={};

        require('./db')(db);
        require('./logs')(app);
    }
})();
