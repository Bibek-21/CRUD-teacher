"use strict";
const sqlstring= require("sqlstring");
const helper= require("../../helper/index");

(()=>{
    module.exports= async(req)=>{

        const sqlquerystring= sqlstring.format(`delete from teachers where uuid = ? `,[req.params.uuid]);

        const sqlquery= await helper.mysqlHelper.query(sqlquerystring);


        if(sqlquery){
            return sqlquery;
        }










        
        else{
            return false;
        }
    }


})();