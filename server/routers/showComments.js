const express = require('express');
const router = express.Router();
const showComments = require('../dbs/showComments');

router.get('/showComments', (req, res) => {
    showComments((result) => {
        res.send(result);
    })
});

module.exports = router;