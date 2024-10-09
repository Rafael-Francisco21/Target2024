const express = require('express');
const router = express.Router();

// Função para verificar se a letra 'a' está presente e contar sua ocorrência
function countLetterA(str) {
    const matches = str.match(/a/gi);
    return matches ? matches.length : 0;
}

// Rota para a página inicial
router.get('/', (req, res) => {
    const problems = [
        { name: "Fibonacci", path: "fibonacci" },
        { name: "Verificar Letra 'A'", path: "stringChecker" }
    ];
    res.render('index', { problems });
});

// Página para o problema de verificar a letra 'a'
router.get('/stringChecker', (req, res) => {
    res.render('stringChecker', { result: null });
});

router.post('/stringChecker', (req, res) => {
    const inputString = req.body.inputString;
    const count = countLetterA(inputString);
    const result = count > 0
        ? `A letra 'a' apareceu ${count} vezes na string fornecida.`
        : `A letra 'a' não apareceu na string fornecida.`;
    res.render('stringChecker', { result });
});


module.exports = router;
