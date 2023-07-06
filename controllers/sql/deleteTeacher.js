"use strict";
const sqlstring = require("sqlstring")
const helper = require("../../helper/index");
// const { lock } = require("../../routes/teacherRoutes");


(() => {
    module.exports = async (req) => {
        try {
            const querystring = sqlstring.format(`update teachers set is_delete =? where uuid = ? `, [1, req.params.uuid]);
            const sqlquery = await helper.mysqlHelper.query(querystring);

            if (sqlquery[0].affectedRows > 0) return true;

            else return false;


        } catch (error) {
            console.log(error);

        }



    }
})();