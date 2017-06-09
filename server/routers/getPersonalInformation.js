const express = require("express");
const router = express.Router();
const getPersonalInformation = require("../dbs/getPersonalInformation");

router.get("/getPersonalInformation", (req, res) => {
    getPersonalInformation(req,(result)=>{
        res.send(result);
    })
});

module.exports = router;