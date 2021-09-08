
module.exports = app => {
  app.get('/atendimentos', (request, response) => {
    response.send('você está na rota de atendimento com o metodo GET')
  })

  app.post('/atendimentos', (request, response) => {
    console.log(request.body)

    response.send('você está na rota de atendimento com o metodo POST')
  })
}