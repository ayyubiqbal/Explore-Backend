require('dotenv').config();
const http = require('http');
const app = require('./app/app');

const server = http.createServer(app);

const port = process.env.PORT || 8000;
// console.log(port);

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
})