const express = require('express');
const router = express.Router();
const addDesiredBook = require('../dbs/addDesiredBook');

router.post('/addDesiredBook', (req, res)=> {
    addDesiredBook(req, (result)=>{
        res.send(result);
    });
});

module.exports = router;
