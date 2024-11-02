
const express = require('express');

const path = require('path');

const router = express.Router();


//router.get('/add-product',(req,res,next)=>{
router.get('/add-product',(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
})


router.post('/product',(req,res,next)=>{
   
    res.send(`<h1>Product we received:${req.body.message}, will be added to product catalog soon . . .</h1>`);
    
});

router.get('/',(req,res,next)=>{
   
    res.redirect('/');
    
});

module.exports = router;