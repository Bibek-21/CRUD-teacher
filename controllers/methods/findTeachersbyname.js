"use strict";

const findteacher= require('../sql/findTeachersbyname');

(()=>{
    module.exports=async(req,res,next)=>{
try {
    const result = await findteacher(req);

    if(result){
        res.status(200).send(result);

    }
    else{
        res.status(400).send("Could not fetch data");
    }
    
    
} catch (error) {
    console.log(error);
    
}

    }

})();