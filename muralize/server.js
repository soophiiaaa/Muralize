const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const alunoController = require('./backend/controllers/alunoController')
const professorController = require('./backend/controllers/professorController')
const loginController = require('./backend/controllers/loginController')
const turmaController = require('./backend/controllers/turmaController')
const atividadeController = require('./backend/controllers/atividadeController')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

//simulação de usuário
// app.use((req, res, next) => {
//     req.user = {
//         id: 2,             
//         tipo: 'aluno' 
//     }
//     next()
// })

app.post('/login', loginController.login)

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

app.get('/turmas', turmaController.listarTodos)
app.get('/turmas/:id', turmaController.buscarPorId)
app.post('/turmas', turmaController.criar)
app.post('/turmas/:id/entrar', turmaController.adicionarAluno)
app.put('/turmas/:id', turmaController.atualizar)
app.delete('/turmas/:id', turmaController.deletar)

app.get('/atividades', atividadeController.listarTodos)
app.get('/atividades/:id', atividadeController.buscarPorId)
app.post('/atividades', atividadeController.criar)
app.put('/atividades/:id', atividadeController.atualizar)
app.delete('/atividades/:id', atividadeController.deletar)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
