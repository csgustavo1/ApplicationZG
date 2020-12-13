const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'gcs210rj',
    database: 'bolsa',
    port: '5432'

});

// Consulta em uma tabela 
// data, tipo_operacao, quantidade, preco
const getUsers = async (req, res) => {
  const response = await pool.query("SELECT data, preco, valor_total, round(valor_total / preco * 100, 2) as RENDIMENTO from user_trade");
  res.json(response.rows);
}


//const getDados = async (req, res) => {
  //const response = await pool.query("SELECT preco, valor_total, (valor_total / preco * 100) as RENDIMENTO from user_trade");
  //res.json(response.rows);
//}

module.exports = {
  getUsers
}