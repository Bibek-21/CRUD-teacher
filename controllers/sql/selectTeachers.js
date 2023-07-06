"use strict";
const sqlstring= require("sqlstring");
const helper = require("../../helper/index");

(()=>{

    module.exports= async()=>{

        const querystring= sqlstring.format(`select * from teachers where is_delete =0 `)
        const [sqlquery]= await helper.mysqlHelper.query(querystring);

        if(sqlquery){
            return sqlquery;
        }
        else {
            return false;
        }
    }

})();
