const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("We are still building Shop");
});

module.exports = router;
