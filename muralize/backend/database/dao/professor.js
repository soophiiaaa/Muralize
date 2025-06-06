const db = require('../db');

class Professor {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.tipo = 'professor';
  }

  salvar(callback) {
    const sql = 'INSERT INTO professor (nome, email, senha, tipo) VALUES (?, ?, ?, ?)';
    db.query(sql, [this.nome, this.email, this.senha, this.tipo], callback);
  }

  atualizar(id, callback) {
    const sql = 'UPDATE professor SET nome = ?, email = ?, senha = ? WHERE id_professor = ?';
    db.query(sql, [this.nome, this.email, this.senha, id], callback);
  }

  static listarTodos(callback) {
    const sql = 'SELECT * FROM professor';
    db.query(sql, callback);
  }

  static buscarPorId(id, callback) {
    const sql = 'SELECT * FROM professor WHERE id_professor = ?';
    db.query(sql, [id], callback);
  }

  static deletar(id, callback) {
    const sql = 'DELETE FROM professor WHERE id_professor = ?';
    db.query(sql, [id], callback);
  }
}

module.exports = Professor;
