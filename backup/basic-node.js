const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`<h1>hello world</h1>`)
        res.statusCode = 200;
        res.end()
    }
    else {
        res.write(`<h1>404 Error</h1>`);
        res.statusCode = 200;
        res.end()
    }
});

server.listen(8800, () => {
    console.log(`server is listening on port 8800`);
})