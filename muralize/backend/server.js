const express = require('express')
const bodyParser = require('body-parser')

const alunoController = require('./controllers/alunoController')
const professorController = require('./controllers/professorController')
const turmaController = require('./controllers/turmaController')

const app = express()
const port = 3000

app.use(bodyParser.json())

//simulação de usuário
app.use((req, res, next) => {
    req.user = {
        id: 2,             
        tipo: 'aluno' 
    }
    next()
})

app.get('/alunos', alunoController.listarTodos)
app.get('/alunos/:id', alunoController.buscarPorId)
app.post('/alunos', alunoController.criar)
app.put('/alunos/:id', alunoController.atualizar)
app.delete('/alunos/:id', alunoController.deletar)

app.get('/professores', professorController.listarTodos)
app.get('/professores/:id', professorController.buscarPorId)
app.post('/professores', professorController.criar)
app.put('/professores/:id', professorController.atualizar)
app.delete('/professores/:id', professorController.deletar)

app.get('/turma', turmaController.listarTodos)
app.get('/turma/:id', turmaController.buscarPorId)
app.post('/turma', turmaController.criar)
app.post('/turma/:id/entrar', turmaController.adicionarAluno)
app.put('/turma/:id', turmaController.atualizar)
app.delete('/turma/:id', turmaController.deletar)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
