const db = require('../db');

class Aluno {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  salvar(callback) {
    const sql = 'INSERT INTO aluno (nome, email, senha) VALUES (?, ?, ?)';
    db.query(sql, [this.nome, this.email, this.senha], callback);
  }
  
  atualizar(id, callback) {
    const sql = 'UPDATE aluno SET nome = ?, email = ?, senha = ? WHERE id_aluno = ?';
    db.query(sql, [this.nome, this.email, this.senha, id], callback);
  }
  
  static listarTodos(callback) {
    const sql = 'SELECT * FROM aluno';
    db.query(sql, callback);
  }
  
  static buscarPorId(id, callback) {
    const sql = 'SELECT * FROM aluno WHERE id_aluno = ?';
    db.query(sql, [id], callback);
  }
  
  static deletar(id, callback) {
    const sql = 'DELETE FROM aluno WHERE id_aluno = ?';
    db.query(sql, [id], callback);
  }
  }

module.exports = Aluno;
