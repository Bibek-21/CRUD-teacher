"use strict";
(()=>{
const deleteTeacher = require('../sql/deleteTeacher');
module.exports= async(req,res)=>{
try {
    const output = await deleteTeacher(req);
if(output){
    res.send({
        message:"Successfully Deleted "
    });
}
else{
    res.send({
        message:"unsuccesfull while deletion"
    })
}



    
} catch (error) {
    console.log(error);
    
}

}
})();