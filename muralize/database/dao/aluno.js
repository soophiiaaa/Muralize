const db = require('./database/db');

const Aluno = {
  criar: (aluno, callback) => {
    const sql = 'INSERT INTO aluno (nome, email, senha) VALUES (?, ?, ?)';
    db.query(sql, [aluno.nome, aluno.email, aluno.senha], callback);
  },                                       

    listarTodos: (callback) => {
    db.query('SELECT * FROM aluno', callback);
  },

  buscarPorId: (id, callback) => {
    db.query('SELECT * FROM aluno WHERE id = ?', [id], callback);
  },

  deletar: (id, callback) => {
    db.query('DELETE FROM aluno WHERE id = ?', [id], callback);
  }
};

module.exports = Aluno;