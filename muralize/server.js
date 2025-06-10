const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Controllers do backend
const alunoController = require('./backend/controllers/alunoController');
const professorController = require('./backend/controllers/professorController');
const loginController = require('./backend/controllers/loginController');
const turmaController = require('./backend/controllers/turmaController');
const atividadeController = require('./backend/controllers/atividadeController');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
// Servir arquivos estáticos (CSS, JS, imagens, HTML)
app.use(express.static(path.join(__dirname, 'frontend', 'src')));

// Rotas API
app.post('/login', loginController.autenticar);

app.get('/alunos', alunoController.listarTodos);
app.get('/alunos/:id', alunoController.buscarPorId);
app.post('/alunos', alunoController.criar);
app.put('/alunos/:id', alunoController.atualizar);
app.delete('/alunos/:id', alunoController.deletar);

app.get('/professores', professorController.listarTodos);
app.get('/professores/:id', professorController.buscarPorId);
app.post('/professores', professorController.criar);
app.put('/professores/:id', professorController.atualizar);
app.delete('/professores/:id', professorController.deletar);

app.get('/turmas', turmaController.listarTodas);
app.get('/turmas/:id', turmaController.buscarPorId);
app.post('/turmas', turmaController.criar);
app.put('/turmas/:id', turmaController.atualizar);
app.delete('/turmas/:id', turmaController.deletar);

app.get('/atividades', atividadeController.listarTodos);
app.get('/atividades/:id', atividadeController.buscarPorId);
app.post('/atividades', atividadeController.criar);
app.put('/atividades/:id', atividadeController.atualizar);
app.delete('/atividades/:id', atividadeController.deletar);

// Rota para página Home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'src', 'pages', 'home.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});