"use strict";
(()=>{
    const express = require('express');
    const router = express.Router();
const teacherRoute = require("../route/teacherRoutes");
router.use("/teacher",teacherRoute)
// module.exports= require('../routes/teacherRoutes')
module.exports= router;
})();