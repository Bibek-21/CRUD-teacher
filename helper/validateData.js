"use strict";

// const data = require("../controllers/methods/createTeachers");

(() => {
    module.exports = (obj) => {

        const isEmail = (email) => {
            // let valid = /@gmail.com/;
            let emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // simple regex expression
            if (email !== '' && email.match(emailFormat)) { return true; }
            else return false;
        }

        const isPhone = (contact) => {
            let contactformat = /^(98|97)\d{8}$/
            if (contact !== '' && contact.match(contactformat))
                return true;
            else return false;
        }

        const isName = (firstName, lastName) => {
            const regex = /^[A-Za-z\s]+$/;
            const firsNamecheck = regex.test(firstName);
            const lastNamecheck = regex.test(lastName);

            if (firsNamecheck == true && lastNamecheck == true) {
                return true;
            }
            else return false;
        }

        const isAge = (age) => {
            if (age >= 18 && age <= 60) return true;
            else return false;
        }

        const emailokey = isEmail(obj.email);
        const contactokey = isPhone(obj.contact);
        const nameokey = isName(obj.firstName, obj.lastName)
        const ageokay = isAge(obj.age)

        if (emailokey == true && contactokey == true && nameokey == true && ageokay == true)
            return true;
        else return false;


    }
})();