const db = require('./database/db');

const Checklist = {
  criar: (checklist, callback) => {
    const sql = 'INSERT INTO checklist (concluido, data_conclusao) VALUES (?, ?)';
    db.query(sql, [checklist.concluido, checklist.data_conclusao], callback);
  },                                       

    listarTodos: (callback) => {
    db.query('SELECT * FROM checklist', callback);
  },

  buscarPorId: (id, callback) => {
    db.query('SELECT * FROM checklist WHERE id = ?', [id], callback);
  },

  deletar: (id, callback) => {
    db.query('DELETE FROM checklist WHERE id = ?', [id], callback);
  }
};

module.exports = Checklist;



