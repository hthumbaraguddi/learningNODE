
const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();


//router.get('/add-product',(req,res,next)=>{
router.get('/add-product',(req,res,next)=>{
    
    res.sendFile(path.join(rootDir,'..','views','add-product.html'));
})


router.post('/product',(req,res,next)=>{
   
    res.send(`<h1>Product we received:${req.body.message}, will be added to product catalog soon . . .</h1>`);
    
});

router.get('/',(req,res,next)=>{
   
    res.redirect('/');
    
});

//module.exports = path.dirname(require.main.filename);

module.exports = router;