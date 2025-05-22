const express = require('express')
const router = express.Router()

router.use('/alunos', require('./alunoRoutes'))

module.exports = router;
