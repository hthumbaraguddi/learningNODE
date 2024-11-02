
const express = require('express');

const router = express.Router();


//router.get('/add-product',(req,res,next)=>{
router.get('/add-product',(req,res,next)=>{
    let formCode=  `<form action="/admin/product" method="POST">
                    Product Name:<input type="text" name="message">
                    <button type="submit">Submit</button>
                    </form>`;
    res.send(formCode);
})


router.post('/product',(req,res,next)=>{
   
    res.send(`<h1>Product we received:${req.body.message}, will be added to product catalog soon . . .</h1>`);
    
});

module.exports = router;