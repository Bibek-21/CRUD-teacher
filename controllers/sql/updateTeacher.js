"use strict";
const sqlstring = require("sqlstring")
const helper = require("../../helper/index");


(()=>{
    module.exports= async(obj,req)=>{
try {

 
    const queryString =sqlstring.format(`update teachers  set  ? where uuid = ?  `, [obj , req.params.uuid])
    
    const sqlquery = await helper.mysqlHelper.query(queryString)

    if(sqlquery[0].affectedRows>0)
    {
        return true;
    }
    else{
        return false
    }
    
} catch (error) {
    console.log(error);
    
}
    }

})();
