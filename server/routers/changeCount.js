const express = require('express');
const router = express.Router();
const changeCount = require('../dbs/changeCount');

router.post('/changeCount', (req, res) => {
    changeCount(req, (result) => {
        res.send(result);
    })
});

module.exports = router;