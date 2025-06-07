const db = require('../db');

class Turma {
  constructor(nome) {
    this.nome = nome;
    this.codigo = Turma.gerarCodigoAleatorio();
    this.alunos = []
  }

  salvar(callback) {
    const sql = 'INSERT INTO turma (nome, codigo_turma) VALUES (?, ?)';
    db.query(sql, [this.nome, this.codigo, this.alunos], callback);
  }

  atualizar(id, callback) {
    const sql = 'UPDATE turma SET nome = ?, codigo_turma = ? WHERE id_turma = ?';
    db.query(sql, [this.nome, this.codigo, id], callback);
  }

  static listarTodos(callback) {
    db.query('SELECT * FROM turma', callback);
  }

  static buscarPorId(id, callback) {
    db.query('SELECT * FROM turma WHERE id_turma = ?', [id], callback);
  }

  static deletar(id, callback) {
    db.query('DELETE FROM turma WHERE id_turma = ?', [id], callback);
  }

  static gerarCodigoAleatorio(tamanho = 6) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let codigoGerado = "";
    for (let i = 0; i < tamanho; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      codigoGerado += caracteres[indice];
    }
    return codigoGerado;
  }
}

module.exports = Turma;
