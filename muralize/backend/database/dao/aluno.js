const db = require('../db');

class Aluno {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.tipo = 'aluno';
  }

  salvar(callback) {
    const sql = 'INSERT INTO aluno (nome, email, senha, tipo) VALUES (?, ?, ?, ?)';
    db.query(sql, [this.nome, this.email, this.senha, this.tipo], callback);
  }

  static entrarNaTurma(idAluno, codigoTurma, callback) {

    const Buscanobanco = 'SELECT id_turma FROM turma WHERE codigo_turma = ?';
    db.query(Buscanobanco, [codigoTurma], (err, resultados) => {
      if (err) return callback(err);

      if (resultados.length === 0) {
        return callback(new Error('Código da turma inválido'));
      }

      const idTurma = resultados[0].id_turma;


      const Inserir = 'INSERT INTO aluno_turma (id_aluno, id_turma) VALUES (?, ?)';
      db.query(Inserir, [idAluno, idTurma], callback);
    });
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
