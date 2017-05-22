const express = require('express');
const router = express.Router();
const addBook = require('../dbs/addBook');

router.post('/addBook', (req, res)=> {
    addBook(req, (result)=>{
        res.send(result);
    });
});

module.exports = router;
