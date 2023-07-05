"use strict";
(()=>{
module.exports= async(obj)=>{
    try {
        let myDate = new Date().getTime(); //epoch value
        const { v4: uuidv4 } = require('uuid'); //super key
        
        const output = await helper.mysqlHelper.query(`INSERT INTO teachers (uuid,firstName,lastName,age,email,createdAt) VALUES ('${uuidv4()}','${obj.firstName }','${obj.lastName}','${obj.age}','${obj.email}',${myDate})`);
 
    } catch (error) {
        
    }
}

})();