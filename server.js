const express = require('express')

const app = express();

const books = [
    {
        id: '1',
        name: 'book 1',
        price: 200,
    },
    {
        id: '2',
        name: 'book 2',
        price: 100,
    },
    {
        id: '3',
        name: 'book 3',
        price: 1200,
    },
    {
        id: '4',
        name: 'book 4',
        price: 400,
    },
    {
        id: '5',
        name: 'book 5',
        price: 900,
    },
    {
        id: '6',
        name: 'book 6',
        price: 500,
    },
    {
        id: '7',
        name: 'book 7',
        price: 700,
    },
    {
        id: '8',
        name: 'book 8',
        price: 300,
    },
    {
        id: '9',
        name: 'book 9',
        price: 200,
    },
    {
        id: '10',
        name: 'book 10',
        price: 200,
    },
]

app.get('/', (req, res) => {
    res.write(`<h1>Hello World</h1>`)
})

app.get('/books', (req, res) => {
    if (req.query.show === 'all') {
        return res.json(books)
    }
    if (req.query.price === '500') {
        const result = books.filter((book) => book.price >= 500)
        return res.json(result)
    }

    // return res.json(books);
})

app.listen(8800, () => {
    console.log(`server is listening on port 8800`);
})