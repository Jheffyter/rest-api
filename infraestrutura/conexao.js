const mysql = require ("mysql");

const conexao = mysql.createConnection ({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "JeF%260617",
  database: "agenda-petshop"
});

module.exports = conexao;