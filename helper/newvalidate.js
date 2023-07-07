"use strict";

(()=>{
    module.exports= async(data)=>{
        
        try {
            if(
                data.firstName==" "||
                data.lastName==" "||
                data.age==" "||
                data.email==" "||
                data.contact==" "||
                data.address==" "||
                data.subject==" "

            ){ 
                return false;
            }
            else if(data.firstName ==/[0-9]/ || data.lastName==/[0-9]/)
            {
                return false;
            }
            
            else if(data.age<18 || data.age>60)
            {
                return false;
            }

            // else if(data.contact=/^(98|97)\d{8}$/)
            // {
            //     return true;
            // }

            else{
                return true;
            }
        } catch (error) {
            console.log(error);
            
        }


    }
})();