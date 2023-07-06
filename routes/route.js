// "use strict";
// (()=>{
//     const express = require('express');
//     const router = express.Router();
//   const   {createTeacher}   =require("./../controllers/methods")
//   //router.post('/create',(req,res)=>
// //   {
// //     res.send("I am herrrrrrrrrre")
// //     createTeacher(req,res);
    
// //   });
// router.use("")
// module.exports= router;
// })();
// "use strict";

// const express = require("express");
// const router = express.Router();
// const   createRegistrationUsers  =require("../controllers/methods/createTeachers");
// (() => {

   
//     router.post('/create', createRegistrationUsers);

//      module.exports = router;
// })()
(() => {
    const express = require("express");
    const router = express.Router();
    const teacher = require('./teacherRoutes');

    router.use('/teacher', teacher);
    
    module.exports = router;
})()