const { listarTodos, buscarPorId } = require('../database/dao/aluno')
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
            if (result.lenght === 0) {
                return res.status(404).json({ error: 'Turma não encontrada' })
            }
            res.json(result[0])
        })
    }, 

    criar: (req, res) => {
        const tipo = req.body.tipo
        if (tipo !== 'professor') {
            return res.status(403).json({ error: 'Apenas professores podem criar turmas' })
        }
        const { nome, codigo, alunos } = req.body
        const turma = new Turma(nome, codigo, alunos)
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
        const { nome, codigo, alunos } = req.body
        const turma = new Turma(nome, codigo, alunos)
        turma.atualizar(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao atualizar turma' })
            }
            res.json({ message: 'Turma atualizada com sucesso!' })
        })
    },
}