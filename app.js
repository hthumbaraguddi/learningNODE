const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("URL:",req.url);
    console.log("Method:",req.method);
    console.log("Header:",req.headers);


    console.log(Date.now());
    //Sending response Back:

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write(

        `
            <head>
                <title> Let say Hello ! to Node </title>
            </head>
            <body>
                <h1>
                    Hello From Node.js Server and Now time is ${new Date().toLocaleString()}
                <h1>
            <body>
        `
    )

    res.write('</html>');

})

server.listen(4000);