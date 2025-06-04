const Aluno = require('../database/dao/aluno')

const alunoController = {
    listarTodos: (req, res) => {
        Aluno.listarTodos((err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao listar alunos' })
            }
            res.json(results)
        })
    },

    buscarPorId: (req, res) => {
        const id = req.params.id
        Aluno.buscarPorId(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao buscar aluno' })
            }
            if (result.length === 0) {
                return res.status(404).json({ error: 'Aluno não encontrado' })
            }
            res.json(result[0])
        })
    },

    criar: (req, res) => {
        const { nome, email, senha } = req.body
        const aluno = new Aluno(nome, email, senha)
        aluno.salvar((err, result) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ error: 'Erro ao criar aluno' })
            }
            res.status(201).json({ message: 'Aluno criado com sucesso!' })
        })
    },

    atualizar: (req, res) => {
        const id = req.params.id
        const { nome, email, senha } = req.body
        const aluno = new Aluno(nome, email, senha)
        aluno.atualizar(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao atualizar aluno' })
            }
            res.json({ message: 'Aluno atualizado com sucesso!' })
        })
    },

    deletar: (req, res) => {
        const id = req.params.id
        Aluno.deletar(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao deletar aluno' })
            }
            res.json({ message: 'Aluno deletado com sucesso!' })
        })
    }
}

module.exports = alunoController;
