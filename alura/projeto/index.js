const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')
const Tabelas = require('./infra/tabelas')

conexao.connect((error) => {
  if (error) {
    console.error('erro', error)
  } else {
    const app = customExpress()

    Tabelas.init(conexao)

    app.listen(3000, () => {
      console.log('servidor rodando na porta 3000')
    })
  }
})
