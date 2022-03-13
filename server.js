const express = require('express');

const app = express()

// local middleware
/* const localMiddleware = (req, res, next) => {
    console.log(`${req.url}, ${req.method}, ${new Date().toISOString()}`);
    // res.send(`<h1>hello middleware</h1>`)
    // const name = req.query.name;
    // if (name === 'iqbal') {
    //     return res.send(`<h3>User not found</h3>`)
    // }
    next()
} */

// global middleware
const globalMiddleware = (req, res, next) => {
    console.log(`${req.url}, ${req.method}, ${new Date().toISOString()}`);
    next()
}

app.use(globalMiddleware)

app.use(express.static(__dirname + '/public'))

// local middleware uses
/* app.get('/hello', localMiddleware, (req, res, next) => {
    res.send({ message: 'hello world' })
}) */

app.get('/hello', (req, res, next) => {
    res.send({ message: 'hello world' })
})

app.get('/about', (req, res, next) => {
    res.send({ message: 'this is about' })
})

app.listen(8000, () => {
    console.log(`server is running on port 8000`);
})