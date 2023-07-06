"use strict";
const createTeacher = require('../sql/createTeacher');
const verifyinfo = require("../../helper/authEmail");

(() => {
    module.exports = async (req, res, next) => {
        try {

            const obj = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                email: req.body.email,
                contact: req.body.contact,
                address: req.body.address,
                subject: req.body.subject
            };

            const info = verifyinfo(obj);

            if (info) {
                const content = await createTeacher(obj);
                if (content == true) {
                    res.status(200).send({
                        message: 'successfully created',
                        success: true
                    })
                }
                else {
                    res.status(400).send({
                        message: 'Could not create table',
                        success: false
                    })
                }
            }

            else {

                res.send("Could not verify email")
            }
        } catch (error) {
            console.log(error);
        }
    }

})();