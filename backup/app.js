const express = require('express')
const fs = require('fs')

const app = express();

app.get('/', (req, res) => {
    console.log(req.app);
    fs.readFile('./pages/index.html', (err, data) => {
        if (err) {
            console.log('Error', err);
            res.send('<h1>Something went wrong</h1>')
        } else {
            res.write(data);
            res.end();
        }
    })
})

app.get('/about', (req, res) => {
    res.send(`<h1>This is about page</h1>`)
})
app.get('/help', (req, res) => {
    res.send(`<h1>This is help page</h1>`)
})

app.listen(8800, () => {
    console.log(`server is listening on port 8800`);
})