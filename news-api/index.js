let mysql = require('mysql2');
const express = require('express')
const app = express()
const port = 3000

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'senha',
    database : 'sistema_noticias'
});

connection.connect();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/categorias', (req, res) => {
    connection.query('SELECT id, nome FROM categoria', function(err, rows, fields) {
        if (err) throw err;
        res.send(rows)
    });
})

app.get('/categorias/:categoriaId/noticias', (req, res) => {
    connection.query(`SELECT id, titulo FROM noticia WHERE id_categoria = ${req.params.categoriaId}`, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows)
    });
})

app.get('/categorias/:categoriaId/noticias/:noticiaId', (req, res) => {
    connection.query(`SELECT id, titulo, conteudo FROM noticia WHERE id_categoria = ${req.params.categoriaId} AND id = ${req.params.noticiaId}`, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows[0]); //sempre traz uma lista, mas essa retorna apenas um elemento, entao seleciona ele
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})