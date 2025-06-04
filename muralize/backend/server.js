const express = require('express')
const bodyParser = require('body-parser')

const alunoController = require('./controllers/alunoController')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/alunos', alunoController.listarTodos)
app.get('/alunos/:id', alunoController.buscarPorId)
app.post('/alunos', alunoController.criar)
app.put('/alunos/:id', alunoController.atualizar)
app.delete('/alunos/:id', alunoController.deletar)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
