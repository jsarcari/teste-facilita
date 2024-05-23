const express = require('express')
const app = express()
const port = 3001

const cliente_model = require('./db');

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/', cliente_model.getClientes)

app.post('/clientes', cliente_model.createCliente)

app.get('/distancias', cliente_model.getDistancia)

app.listen(port, () => {
    console.log(`App rodando na porta ${port}.`)
})