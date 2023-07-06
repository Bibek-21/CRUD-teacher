"use strict";

// const { param } = require("../../routes/teacherRoutes");
const updateTeachers= require("../sql/updateTeacher");

(()=>{
    // const httprequest = require("httprequest")
module.exports= async(req,res,next)=>{
    try {
        const newobj = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            age:req.body.age,
            email:req.body.email,
            address:req.body.address,
            contact:req.body.contact,
            subject:req.body.subject,
           updatedAt:new Date().getTime()
        }

     
        const updateValue = await updateTeachers(newobj,req)
        if(updateValue==true){
            res.status(200).send({
                message:'successfully updated'
            })
            
        }
        else {
            res.status(400).send({
                message:'unsuccessfull updation',
                success: false
            })
        }
        
    } catch (error) {
        console.log(error);
        
    }
}
})();