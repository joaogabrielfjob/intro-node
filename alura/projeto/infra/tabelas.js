class Tabelas {

  init(conexao) {
    this.conexao = conexao
    this.criarAtendimento()
  }

  criarAtendimento() {
    const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int not null auto_increment, cliente varchar(50) not null, pet varchar(20), servico varchar(20) not null, status varchar(20) not null, observacoes text, primary key(id))'

    this.conexao.query(sql, (error) => {
      if (error) {
        console.error(error)
      } else {
        console.log('Tabela Atendimentos criada com sucesso')
      }
    })
  }
}

module.exports = new Tabelas