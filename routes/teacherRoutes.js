"use strict";
(()=>{
    
    const express = require("express");
    const router = express.Router();
    const create_teacher= require('../controllers/methods/createTeachers')
    router.post('/createteacher',create_teacher)

})();