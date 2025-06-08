const db = require('../database/db')

const loginController = {
    login: (req, res) => {
        const { email, senha } = req.body

        const sqlAluno = 'SELECT * FROM aluno WHERE email = ? AND senha = ?'
        db.query(sqlAluno, [email, senha], (err, resultAluno) => {
            if (err) return res.status(500).json({ error: 'Erro no servidor' })
            if (resultAluno.length > 0) {
                return res.json({ tipo: 'aluno', id: resultAluno[0].id_aluno, nome: resultAluno[0].nome })
            }

            const sqlProfessor = 'SELECT * FROM professor WHERE email = ? AND senha = ?'
            db.query(sqlProfessor, [email, senha], (err, resultProf) => {
                if (err) return res.status(500).json({ error: 'Erro no servidor' })
                if (resultProf.length > 0) {
                    return res.json({ tipo: 'professor', id: resultProf[0].id_professor, nome: resultProf[0].nome })
                }
                return res.status(401).json({ error: 'Email ou senha inválidos' })
            })
        })
    }
}

module.exports = loginController;
