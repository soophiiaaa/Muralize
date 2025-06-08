const Professor = require('../database/dao/professor')

const professorController = {
    listarTodos: (req, res) => {
        Professor.listarTodos((err, results) => {
            if (err) {
                return res.status(500).json({ error:'Erro ao listar professores' })
            }
            res.json(results)
        })
    },

    buscarPorId: (req, res) => {
        const id = req.params.id
        Professor.buscarPorId(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao buscar professor' })
            }
            if (result.length === 0) {
                return res.status(404).json({ error: 'Professor não encontrado' })
            }
            res.json(result[0])
        })
    },

    criar: (req, res) => {
        const { nome, email, senha } = req.body
        const professor = new Professor(nome, email, senha)
        professor.salvar((err, result) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ error: 'Erro ao criar professor' })
            }
            res.status(201).json({ message: 'Professor criado com sucesso!' })
        })
    },

    atualizar: (req, res) => {
        const id = req.params.id
        const { nome, email, senha } = req.body
        const professor = new Professor(nome, email, senha)
        professor.atualizar(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao atualizar professor' })
            }
            res.json({ message: 'Professor atualizado com sucesso!' })
        })
    },

    deletar: (req, res) => {
        const id = req.params.id
        Professor.deletar(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao deletar professor' })
            }
            res.json({ message: 'Professor deletado com sucesso!' })
        })
    }
}

module.exports = professorController;
