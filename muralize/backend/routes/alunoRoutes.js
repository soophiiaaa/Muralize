const express = require('express')
const router = express.Router()
const aluno = require('../models/Aluno')

router.post('/', async (req, res) => {
    try {
        const novoAluno = await Aluno.create(req.body)
        res.status(201).json(novoAluno)
    } catch (error) {
        res.status(400).json({ erro: 'Erro ao criar aluno', detalhe: error.message })
    }
})

module.exports = router;
