"use strict";
(()=>{
    
    const express = require("express");
    const router = express.Router();

    const create_teacher= require('../controllers/methods/createTeachers');
    const update_teacher= require('../controllers/methods/updateTeachers');
    const delete_teacher= require('../controllers/methods/deleteTeachers');
    const select_teacher= require('../controllers/methods/selectTeachers');
    const find_teacherbyuuid= require('../controllers/methods/findTeachersbyuuid');
    const find_teacherbyname= require('../controllers/methods/findTeachersbyname');

    router.post('/createteacher',create_teacher);
    router.put('/updateteacher/:uuid',update_teacher);
    router.delete('/deleteteacher/:uuid',delete_teacher);
    router.get('/selectteacher',select_teacher);
    router.get('/findteacherbyid/:uuid',find_teacherbyuuid);
    router.get('/findteacherbyname/:firstName',find_teacherbyname);



    module.exports=router;

})();