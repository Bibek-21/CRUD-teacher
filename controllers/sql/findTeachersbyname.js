"use strict";

const sqlstring= require("sqlstring");
const helper= require("../../helper/index");

(()=>{
module.exports= async(req)=>{

    try {
        const querystring= sqlstring.format(`select * from teachers where firstName = ?`,[req.params.firstName]);
        const [sqlquery] = await helper.mysqlHelper.query(querystring);

        if(sqlquery[0]){
            return sqlquery;
        }
        else return false;

    } catch (error) {
        console.log(error);
        
    }
}
})();