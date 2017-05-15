const express = require('express');
const router = express.Router();
const showBooks = require('../dbs/showBooks');

router.get('/showBooks', (req, res)=> {
    showBooks(req, (result)=> {

        res.send(result);
    })
});

module.exports = router;