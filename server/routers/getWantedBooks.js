const express = require('express');
const router = express.Router();
const getWantedBooks = require('../dbs/getWantedBooks');

router.get('/getWantedBooks', (req, res) => {
    getWantedBooks(req, (wantedBooks) => {
        res.send(wantedBooks);
    })
});

module.exports = router;