const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "gcs210rj",
  database: "bolsa",
  port: "5432",
});

// Consulta em uma tabela
// data, tipo_operacao, quantidade, preco
const getUsers = async (test, res) => {
  let parameter = res.req.query;
  const response = await pool.query(
    "SELECT instrument, preco, price, data, (((preco/price)-1)*100) AS PORCENTAGEM, valor_total FROM user_trade INNER JOIN instrument_quote ON simbol = instrument AND data = date where data BETWEEN '" +
      parameter["data_inicio"] +
      "' AND '" +
      parameter["data_fim"] +
      "'"
  );
  res.json(response.rows);
};

module.exports = {
  getUsers,
};
