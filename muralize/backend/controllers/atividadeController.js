const Atividade = require('../database/dao/atividade')

const atividadeController = {
    listarTodos: (req, res) => {
        Atividade.listarTodos((err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao listar atividades' })
            }
            res.json(results)
        })
    },

    buscarPorId: (req, res) => {
        const id = req.params.id
        Atividade.buscarPorId(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao buscar atividade' })
            }
            if (result.length === 0) {
                return res.status(404).json({ error: 'Atividade não encontrada' })
            }
            res.json(result[0])
        })
    },

    criar: (req, res) => {
        const {  id_turma, titulo, descricao, tipo, data_entrega } = req.body
        const atividade = new Atividade( id_turma, titulo, descricao, tipo, data_entrega)
        atividade.salvar((err, result) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ error: 'Erro ao criar atividade' })
            }
            res.status(201).json({ message: 'Atividade criada com sucesso!' })
        })
    },

    atualizar: (req, res) => {
        const id = req.params.id
        const {  id_turma, titulo, descricao, tipo, data_entrega } = req.body
        const atividade = new Atividade( id_turma, titulo, descricao, tipo, data_entrega)
        atividade.atualizar(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao atualizar atividade' })
            }
            res.json({ message: 'Atividade atualizada com sucesso!' })
        })
    },

    deletar: (req, res) => {
        const id = req.params.id
        Professor.deletar(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao deletar atividade' })
            }
            res.json({ message: 'Atividade deletada com sucesso!' })
        })
    }
}

module.exports = atividadeController;
