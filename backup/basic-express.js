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
    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello NodeJS</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
        
                body {
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 1rem;
                }
        
                .container {
                    width: 50%;
                    margin: 2rem auto;
                    padding: 2rem 2rem;
                    color: #fff;
                    background-color: rgb(170, 11, 11);
        
                }
            </style>
        </head>
        
        <body>
            <div class="container">
                <h1>I am NodeJS Code</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum iste maxime temporibus sunt ullam consectetur
                    unde nesciunt totam sit nulla, illum quasi tempora vel optio? Illum libero atque aliquam facilis?</p>
            </div>
        </body>
        
        </html>
        `
    )
})

app.get('/books', (req, res) => {
    if (req.query.show === 'all') {
        return res.json(books)
    }
    if (req.query.price === '500') {
        const result = books.filter((book) => book.price >= 500)
        return res.json(result)
    }

    return res.json(books);
})

app.listen(8800, () => {
    console.log(`server is listening on port 8800`);
})