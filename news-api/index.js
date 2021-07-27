var mysql = require('mysql2');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/categorias', (req, res) => {
    let categorias = []
    res.send(categorias)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})