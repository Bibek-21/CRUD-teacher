"use strict";

const hard_delete= require("../sql/hardDeletebyuuid");

(()=>{
    module.exports= async(req,res)=>{

        try {
            const deletedata = await hard_delete(req);

            if(deletedata){
                res.status(200).send({
                    message:"succesfully deleted",
                    data:[deletedata]
                })
            }
            else {
                res.status(400).send({ 
                message:"Could not delete"
                })
            }

            
        } catch (error) {
            console.log(error);
            
        }
    }


})();