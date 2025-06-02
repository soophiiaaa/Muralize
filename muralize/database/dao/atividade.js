const db = require('./database/db');

const Atividade = {
  criar: (atividade, callback) => {
    const sql = 'INSERT INTO atividade (titulo, descricao, tipo) VALUES (?, ?, ?)';
    db.query(sql, [atividade.titulo, atividade.descricao, atividade.tipo], callback);
  },                                       

    listarTodos: (callback) => {
    db.query('SELECT * FROM aluno', callback);
  },

  buscarPorId: (id, callback) => {
    db.query('SELECT * FROM atividade WHERE id = ?', [id], callback);
  },

  deletar: (id, callback) => {
    db.query('DELETE FROM atividade WHERE id = ?', [id], callback);
  }
};

module.exports = Atividade;