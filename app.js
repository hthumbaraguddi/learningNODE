const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write(`
            <head>
                <title>Let send message to NODE</title>
            </head>
            <body>
                <h1>Now time is ${new Date().toLocaleString()}</h1>
                <form action="/message" method="POST">
                    Could you please type your Name:<input type="text" name="message">
                    <button type="submit">Submit</button>
                </form>
            </body>
        `);
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const fullMessage = [];
        req.on('data', (messageBit) => {
            fullMessage.push(messageBit);
        });

        req.on('end', () => {
            const parsedMessage = Buffer.concat(fullMessage).toString().split('=')[1];
            console.log(parsedMessage);

            res.write('<html>');
            res.write(`
                <head>
                    <title>Received Message from NODE</title>
                </head>
                <body>
                    <h1>Now time is ${new Date().toLocaleString()}</h1>
                    <h2>Hello,  ${parsedMessage}, Welcome. </h2>
                    <a href="/">Go Back</a>
                </body>
            `);
            res.write('</html>');
            return res.end();
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write(`
            <head>
                <title>Let say Hello! to Node</title>
            </head>
            <body>
                <h1>Hello from Node.js Server! Now time is ${new Date().toLocaleString()}</h1>
            </body>
        `);
        res.write('</html>');
        res.end();
    }
});

server.listen(4000);
