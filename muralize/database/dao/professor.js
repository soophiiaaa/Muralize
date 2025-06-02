
const db = require('./database/db');

const Professor = {
  criar: (professor, callback) => {
    const sql = 'INSERT INTO professor (nome, email, senha) VALUES (?, ?, ?)';
    db.query(sql, [professor.nome, professor.email, professor.senha], callback);
  },                                       

  listarTodos: (callback) => {
    db.query('SELECT * FROM professor', callback);
  },

  buscarPorId: (id, callback) => {
    db.query('SELECT * FROM professor WHERE id = ?', [id], callback);
  },

  deletar: (id, callback) => {
    db.query('DELETE FROM professor WHERE id = ?', [id], callback);
  }
};

module.exports = Professor;