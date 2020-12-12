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
  const response = await pool.query("SELECT * FROM user_trade WHERE instrument = 'ITUB4F'");
  res.status(200).json(response.rows);
}

module.exports = {
    getUsers
  }

