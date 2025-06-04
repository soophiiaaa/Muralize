const db = require('./database/db');

class Turma {
  constructor(nome) {
    this.nome = nome;
  }

  salvar(callback) {
    const sql = 'INSERT INTO turma (nome) VALUES (?)';
    db.query(sql, [this.nome], callback);
  }

  atualizar(id, callback) {
    const sql = 'UPDATE turma SET nome = ? WHERE id = ?';
    db.query(sql, [this.nome, id], callback);
  }

  static listarTodos(callback) {
    db.query('SELECT * FROM turma', callback);
  }

  static buscarPorId(id, callback) {
    db.query('SELECT * FROM turma WHERE id = ?', [id], callback);
  }

  static deletar(id, callback) {
    db.query('DELETE FROM turma WHERE id = ?', [id], callback);
  }
}

module.exports = Turma;
