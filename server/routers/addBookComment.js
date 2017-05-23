const express = require('express');
const router = express.Router();
const addBookComment = require('../dbs/addBookComment');

router.post('/addBookComment', (req, res) => {
    addBookComment(req, (result) => {
        res.send(result);
    })
});

module.exports = router;