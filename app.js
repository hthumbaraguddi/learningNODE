const express = require('express');
const bodyParser =  require('body-parser');
//const route = require('./route'); // we will not this module. 

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

//app.use(route.GreetingRoute);

//lets buidl an app

//middleware
app.use('/add-product',(req,res,next)=>{
    let formCode=  `<form action="/product" method="POST">
                    Product Name:<input type="text" name="message">
                    <button type="submit">Submit</button>
                    </form>`;
    res.send(formCode);
})

app.use('/product',(req,res,next)=>{
   
    res.send(`<h1>Product we received:${req.body.message}, will be added to product catalog soon . . .</h1>`);
})


app.use('/',(req,res,next)=>{
   
    res.send(`<h1>Hello...</h1>`);
})

app.listen(4000);
