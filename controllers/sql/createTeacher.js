"use strict";

const sqlstring = require("sqlstring")
const helper = require("../../helper/index");
(()=>{
module.exports= async(obj)=>{
    try {
        let myDate = new Date().getTime(); //epoch value
        const { v4: uuidv4 } = require('uuid'); //super key
        // const sqlquery=sqlstring.format(`insert into teachers ? values ?`,[(uuid,firstName,lastName,age,email,contact,address,subject,createdAt),('${uuidv4()}','${obj.firstName }','${obj.lastName}','${obj.age}','${obj.email}','${obj.contact}','${obj.address}','${obj.subject}','${myDate}')] )
        const output = await  helper.mysqlHelper.query(`INSERT INTO teachers (uuid,firstName,lastName,age,email,contact,address,subject,Password,createdAt) VALUES ('${uuidv4()}','${obj.firstName }','${obj.lastName}','${obj.age}','${obj.email}','${obj.contact}','${obj.address}','${obj.subject}','${obj.Password}',${myDate})`);
        // const output = await  helper.mysqlHelper.query(sqlquery);
        if(output[0].affectedRows>0){
            return true

        }
        else{
            return false
        }
    } catch (error) {
       throw error;   
    }
}

})();