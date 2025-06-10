const db = require('../db');

class Checklist {
  constructor(concluido, data_conclusao) {
    this.concluido = concluido;
    this.data_conclusao = data_conclusao;
  }

  salvar(callback) {
    const sql = 'INSERT INTO checklist (concluido, data_conclusao) VALUES (?, ?)';
    db.query(sql, [this.concluido, this.data_conclusao], callback);
  }

  atualizar(id, callback) {
    const sql = 'UPDATE checklist SET concluido = ?, data_conclusao = ? WHERE id = ?';
    db.query(sql, [this.concluido, this.data_conclusao, id], callback);
  }

  static listarTodos(callback) {
    db.query('SELECT * FROM checklist', callback);
  }

  static buscarPorId(id, callback) {
    db.query('SELECT * FROM checklist WHERE id = ?', [id], callback);
  }

  static deletar(id, callback) {
    db.query('DELETE FROM checklist WHERE id = ?', [id], callback);
  }
}

module.exports = Checklist;

