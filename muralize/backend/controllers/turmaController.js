const Turma = require('../database/dao/turma')

const turmaController = {
    listarTodos: (req, res) => {
        Turma.listarTodos((err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao listar turmas' })
            }
            res.json(results)
        })
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
        const tipo = req.user.tipo
        if (tipo !== 'professor') {
            return res.status(403).json({ error: 'Apenas professores podem criar turmas' })
        }

        const { nome, ano } = req.body
        const id_professor = req.user.id

        const turma = new Turma(nome, ano, id_professor)
        turma.salvar((err, result) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ error: 'Erro ao criar turma' })
            }
            res.status(201).json({ message: 'Turma criada com sucesso!' })
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
