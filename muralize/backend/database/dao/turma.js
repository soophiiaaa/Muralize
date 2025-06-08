const db = require('../db');

class Turma {
  constructor(nome, ano, id_professor) {
    this.nome = nome;
    this.ano = ano;
    this.id_professor = id_professor;
    this.codigo = Turma.gerarCodigoAleatorio();
  }

  salvar(callback) {
    const sql = 'INSERT INTO turma (nome, ano, id_professor, codigo) VALUES (?, ?, ?, ?)';
    db.query(sql, [this.nome, this.ano, this.id_professor, this.codigo], callback);
  }

  atualizar(id, callback) {
    const sql = 'UPDATE turma SET nome = ?, ano = ?, id_professor = ?, codigo = ? WHERE id_turma = ?';
    db.query(sql, [this.nome, this.ano, this.id_professor, this.codigo, id], callback);
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

  static adicionarAluno(id_aluno, id_turma, callback) {
    const sql = 'INSERT INTO aluno_turma (id_aluno, id_turma) VALUES (?, ?)'
    db.query(sql, [id_aluno, id_turma], (err, result) => {
      if (err) {
        return callback(err)
      }
      const sqlUpdate = 'UPDATE aluno SET id_turma = ? WHERE id_aluno = ?'
      db.query(sqlUpdate, [id_turma, id_aluno], (err, resultUpdate) => {
        if (err) {
          return callback(err)
        }
        callback(null, { insert: result, update: resultUpdate })
      })
    })
  }
}

module.exports = Turma;
