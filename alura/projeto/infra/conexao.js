const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'joaogabriel',
  password: '1012',
  database: 'agenda-petshop'
})

module.exports = conexao