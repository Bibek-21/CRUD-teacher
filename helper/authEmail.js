"use strict";

// const data = require("../controllers/methods/createTeachers");

(() => {
    module.exports = (obj) => {

        const isEmail = (email) => {
            let emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // simple regex expression
            if (email !== '' && email.match(emailFormat)) { return true; }
            else return false;
        }

        const isPhone = (contact)=>{
            let contactforamat =/^(98|97)\d{8}$/
            if(contact!==''&& contact.match(contactforamat))
            return true;
            else return false;
        }
        const emailokey =isEmail(obj.email);
        const contactokey = isPhone(obj.contact);

        if(emailokey==true && contactokey==true)
        return true;

    }
})()