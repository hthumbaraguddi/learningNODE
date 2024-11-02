const express = require('express');
const path = require('path');
const bodyParser =  require('body-parser');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app = express();


app.use(bodyParser.urlencoded({extended : false}));

//No effect on order of these but if you use router.use in the admin route or shoproute then you will redirected to '/' router
//which will give you hello....

//To check above statement, we have modified the route.get to route.use in adminRoute

app.use(shopRoute);
app.use('/admin',adminRoute);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','file-notfound.html'));
})


app.listen(4000);
