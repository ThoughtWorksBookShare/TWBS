const express = require('express');
const router = express.Router();
const verifyInfo = require('../dbs/signIn');

router.post('/verifyInfo', (req, res)=> {
    verifyInfo(req,(result)=> {
        res.send(result)
    })
})

module.exports = router;