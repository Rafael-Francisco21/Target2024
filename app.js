const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const problemsRouter = require('./routes/problems');

const app = express();

// Configuração do Mustache como view engine
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// Middleware para lidar com dados de formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Rota principal de problemas
app.use('/', problemsRouter);

// Servir arquivos estáticos
app.use(express.static('public'));

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
