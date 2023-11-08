function soma(a, b) {
    return a + b;
  }

function subtrai(a, b) {
    return a - b;
  }

function multiplica(a, b) {
    return a * b;
  }

function divide(a, b) {
    return a / b;
  }

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo!');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = soma(body.numero1, body.numero2);

    res.send(`O resultado da soma de ${body.numero1} e ${ body.numero2} é ${resultado}`);
  });

app.post('/subtrai', function (req, res) {
    var body = req.body;
    var resultadoSub = subtrai(body.numero1, body.numero2);

    res.send(`O resultado da subtração de ${body.numero1} e ${ body.numero2} é ${resultadoSub}`);
  });

app.post('/multiplica', function (req, res) {
    var body = req.body;
    var resultado = multiplica(body.numero1, body.numero2);

    res.send(`O resultado da multiplicação de ${body.numero1} e ${ body.numero2} é ${resultado}`);
  });

app.post('/divide', function (req, res) {
    var body = req.body;
    var resultado = divide(body.numero1, body.numero2);

    res.send(`O resultado da divisão de ${body.numero1} e ${ body.numero2} é ${resultado}`);
  });