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
  const response = await pool.query("SELECT * FROM user_trade ");
  res.json(response.rows);
}


module.exports = {
  getUsers
}