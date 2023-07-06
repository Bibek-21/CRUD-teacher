"use strict";

const selectTeacher= require("../sql/selectTeachers");

(()=>{
    module.exports= async(req,res)=>{
        try {
            const select_teacher= await selectTeacher();

            if(select_teacher){
                res.status(200).send(select_teacher);

            }
            else{
                res.status(400).send("Unsuccesfull while selecting data")
            }
            
        } catch (error) {
            res.send('could not fetch data');
            console.log(error);
            
        }

    }

})();
