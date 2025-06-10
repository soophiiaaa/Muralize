const Turma = require('../database/dao/turma')
const crypto = require('crypto'); 

const turmaController = {
listarTodos: (req, res) => {
  const { professorId } = req.query;

  if (professorId) {
    Turma.listarPorProfessor(professorId, (err, turmas) => {
      if (err) {
        return res.status(500).json({ erro: 'Erro ao listar turmas do professor.' });
      }
      res.status(200).json(turmas);
    });
  } else {
    Turma.listarTodos((err, turmas) => {
      if (err) {
        return res.status(500).json({ erro: 'Erro ao listar turmas.' });
      }
      res.status(200).json(turmas);
    });
  }
},

    buscarPorId: (req, res) => {
        const id = req.params.id
        Turma.buscarPorId(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao buscar turma' })
            }
            if (result.length === 0) {
                return res.status(404).json({ error: 'Turma não encontrada' })
            }
            res.json(result[0])
        })
    }, 
  criar: (req, res) => {
    const { nome, ano, id_professor, tipo } = req.body;

    if (tipo !== "professor") {
      return res.status(403).json({ erro: "Apenas professores podem criar turmas." });
    }

    // Criar nova turma com código gerado automaticamente
    const novaTurma = new Turma(nome, ano, id_professor);
 // Salvar no banco
    novaTurma.salvar((err, resultado) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ erro: "Erro ao criar turma." });
      }
// Retorna o código da turma para o front
      res.status(201).json({
        mensagem: "Turma criada com sucesso",
        codigo: novaTurma.codigo
      });
    });
  },

    adicionarAluno: (req, res) => {
        const tipo = req.user.tipo
        if (tipo !== 'aluno') {
            return res.status(403).json({ error: 'Apenas alunos podem ser adicionados nas turmas' })
        }

        const id_aluno = req.user.id
        const id_professor = req.params.id

        Turma.adicionarAluno(id_aluno, id_professor, (err, result) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ error: 'Erro ao adicionar aluno' })
            }
            res.json({ message: 'Aluno adicionado à turma com sucesso!' })
        })
    },

    atualizar: (req, res) => {
        const id = req.params.id
        const { nome, ano, id_professor } = req.body
        const turma = new Turma(nome, ano, id_professor)
        turma.atualizar(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao atualizar turma' })
            }
            res.json({ message: 'Turma atualizada com sucesso!' })
        })
    },

    deletar: (req, res) => {
        const id = req.params.id
        Turma.deletar(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao deletar turma' })
            }
            res.json({ message: 'Turma deletada com sucesso!' })
        })
    }
}

module.exports = turmaController;
