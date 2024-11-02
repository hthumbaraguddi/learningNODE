const express = require('express');
const bodyParser =  require('body-parser');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app = express();


app.use(bodyParser.urlencoded({extended : false}));

//No effect on order of these but if you use router.use in the admin route or shoproute then you will redirected to '/' router
//which will give you hello....
app.use(adminRoute);
app.use(shopRoute);


app.use('/',(req,res,next)=>{
   
    res.send(`<h1>Hello...</h1>`);
})

app.listen(4000);
