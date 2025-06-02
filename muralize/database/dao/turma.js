const db = require('./database/db');

const Turma = {
  criar: (turma, callback) => {
    const sql = 'INSERT INTO turma (nome) VALUES (?)';
    db.query(sql, [turma.nome], callback);
  },                                       

    listarTodos: (callback) => {
    db.query('SELECT * FROM turma', callback);
  },

  buscarPorId: (id, callback) => {
    db.query('SELECT * FROM turma WHERE id = ?', [id], callback);
  },

  deletar: (id, callback) => {
    db.query('DELETE FROM turma WHERE id = ?', [id], callback);
  }
};

module.exports = Turma;