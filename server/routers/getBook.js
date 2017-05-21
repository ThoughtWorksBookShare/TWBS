const express = require('express');
const router = express.Router();
const getBook = require('../dbs/getBook');

router.post('/getBook', (req, res) => {
    getBook(req, (result) => {
        res.send(result);
    })
});

module.exports = router;