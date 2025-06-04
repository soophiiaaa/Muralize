const db = require('./database/db');

class Atividade {
  constructor(titulo, descricao, tipo) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tipo = tipo;
  }

  salvar(callback) {
    const sql = 'INSERT INTO atividade (titulo, descricao, tipo) VALUES (?, ?, ?)';
    db.query(sql, [this.titulo, this.descricao, this.tipo], callback);
  }
  
  atualizar(id, callback) {
    const sql = 'UPDATE atividade SET titulo = ?, descricao = ?, tipo = ? WHERE id = ?';
    db.query(sql, [this.titulo, this.descricao, this.tipo, id], callback);
  }
  
  static listarTodos(callback) {
    const sql = 'SELECT * FROM atividade';
    db.query(sql, callback);
  }
  
  static buscarPorId(id, callback) {
    const sql = 'SELECT * FROM atividade WHERE id = ?';
    db.query(sql, [id], callback);
  }
  
  static deletar(id, callback) {
    const sql = 'DELETE FROM atividade WHERE id = ?';
    db.query(sql, [id], callback);
  }
  }

module.exports = Atividade;
