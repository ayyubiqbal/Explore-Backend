const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send()
})

app.get('/about', (req, res) => {

})

app.listen(8800, () => {
    console.log(`server is listening on port 8800`);
})