const db = require('../db');

class Atividade {
  constructor(id_turma, titulo, descricao, tipo, data_entrega) {
    this.id_turma = id_turma
    this.titulo = titulo;
    this.descricao = descricao;
    this.tipo = tipo;
    this.data_entrega = data_entrega;
  }

  salvar(callback) {
    const sql = 'INSERT INTO atividade (id_turma, titulo, descricao, tipo, data_entrega) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [this.id_turma, this.titulo, this.descricao, this.tipo, this.data_entrega], callback);
  }
  
  atualizar(id, callback) {
    const sql = 'UPDATE atividade SET id_turma = ? titulo = ?, descricao = ?, tipo = ?, data_entrega = ? WHERE id = ?';
    db.query(sql, [this.id_turma, this.titulo, this.descricao, this.tipo, this.data_entrega, id], callback);
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
