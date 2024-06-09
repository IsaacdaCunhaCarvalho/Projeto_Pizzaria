/* 
**************************************************************************
 FATEC - ZONA SUL - Desenvolvimento de Software Multiplataformas
 DISCIPLINA: Desenvolvimento Web 3
 AUTOR: Isaac C.Carvalho        -         DATA: 15/04/24
 DESCRIÇÃO: Usando o framework express.js
**************************************************************************
*/

// Importação do modulo express e router:
const express = require('express');
const router = require('./routes/index');

// Rotas (quando o servidor for acessado para onde deve ir):
const app = express();
app.use('/', router);

app.use(express.json());

// Exportação de router
module.exports = app;