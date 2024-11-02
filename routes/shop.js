const express = require('express');

const router = express.Router();

router.get('/shop',(req,res)=>{
    res.send("We are still building Shop");
});

module.exports = router;
