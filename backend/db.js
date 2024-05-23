const { Grafo } = require('./Grafo');
const { Pool } = require("pg"); // carrega o package pg
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "postgres",
  database: "facilita",
}); // armazena o pool numa variável global

// consulta todos os clientes registrados na base de dados
const getClientes = (request, response) => {
  pool.query("SELECT * FROM cliente", (err, res) => {
    if (err) {
      throw err;
    }
    response.status(200).json(res.rows);
  });
};

// criar um novo cliente na base de dados
const createCliente = (request, response) => {
  const { nome, email, telefone, coordenadaX, coordenadaY } = request.body;
  pool.query(
    "INSERT INTO cliente (nome, email, telefone, coordenadaX, coordenadaY) VALUES ($1, $2, $3, $4, $5)",
    [nome, email, telefone, coordenadaX, coordenadaY],
    (err, res) => {
      if (err) {
        throw err;
      }
      response.status(200).send("Cliente adicionado.");
    }
  );
};

const getDistancia = (request, response) => {
    pool.query("SELECT id, nome, coordenadaX, coordenadaY FROM cliente", (err, res) => {
        if(err) {
            throw err;
        }
        
        const coordenadas = [[0,0]]
        res.rows.forEach(row => coordenadas.push([row.coordenadax, row.coordenaday]));
            /*if (coordX.distancia < coordY.distancia) {
                return -1;
            } else {
                return 1;
            }*/

        var grafo = new Grafo();
        coordenadas.map(coordenada => grafo.adicionarVertice(coordenada));

        for (let i=0; i < coordenadas.length; i++) {
            for (let j = i+1; j < coordenadas.length; j++) {
                grafo.adicionarAresta(coordenadas[i], coordenadas[j]);
            }
        }

        grafo.caminho()
        
        response.status(200).json(grafo);
    }
    );
}

module.exports = {
  getClientes,
  createCliente,
  getDistancia
};
