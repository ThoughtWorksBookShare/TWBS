const express = require('express');
const router = express.Router();
const AddInfo = require('../dbs/signUp');

router.post('/signUp', (req, res)=> {
    AddInfo(req, (result)=> {
        res.send(result)
    })
})

module.exports = router;