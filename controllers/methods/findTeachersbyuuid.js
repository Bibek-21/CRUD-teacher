"use strict";

const findteacher= require('../sql/findTeachersbyuuid');

(()=>{
    module.exports=async(req,res,next)=>{
try {
    const result = await findteacher(req);

    if(result){
        res.status(200).send(result);
    }
    else{
        res.status(400).send("could not fetch data")
    }

    
} catch (error) {
    console.log(error);
    
}

    }

})();