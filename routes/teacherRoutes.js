"use strict";
(()=>{
    
    const express = require("express");
    const router = express.Router();

    const create_teacher= require('../controllers/methods/createTeachers');
    const update_teacher= require('../controllers/methods/updateTeachers');
    const delete_teacher= require('../controllers/methods/deleteTeachers');
    const select_teacher= require('../controllers/methods/selectTeachers');

    router.post('/createteacher',create_teacher);
    router.put('/updateteacher/:uuid',update_teacher);
    router.delete('/deleteteacher/:uuid',delete_teacher);
    router.delete('/selectteacher',select_teacher);


    module.exports=router;

})();