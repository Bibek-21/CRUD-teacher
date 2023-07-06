"use strict";
(()=>{
const createTeacher = require('../sql/createTeacher');
module.exports= async(req,res,next)=>{
    try {

        const obj={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email,
        contact: req.body.contact,
        address:req.body.address,
        subject:req.body.subject
        };
    
        const content = await createTeacher(obj);
        if(content==true){
            res.status(200).send({
                message:'successfully created',
                success: true
            })
        }
        else{
            res.status(400).send({
                message:'Could not create table',
                success: false
            })
        }

    } catch (error) {
        console.log(error);
        
    }
}

})();