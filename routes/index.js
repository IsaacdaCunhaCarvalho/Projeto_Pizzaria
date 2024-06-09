// Importação do modulo express e router:
const express = require('express');
const fs = require('fs');
const path = require('path');

// Rotas (quando o servidor for acessado para onde deve ir):
const router = express.Router();

require('dotenv').config({path:'variables.env'});

router.use(express.static('public'));

// Criação dos End-Point - "/"
router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, './index.html'), (err, data) => {
    if(err){
      res.status(500).send("500 - Erro interno do servidor");
    } else { 
      res.status(200).type('text/html').send(data);
    }
  });
});

router.get('/pizzariaLogo.jpg', (req, res) => {
  fs.readFile(path.join(__dirname, 'pizzariaLogo.jpg'), (err, data) => {
    if(err){
      res.status(500).send("500 - Erro interno do servidor");
    } else { 
      res.status(200).type('image/jpg').send(data);
    }
  });
});

// Criação dos End-Point - "/cardapio"
router.get('/cardapio', (req, res) => {
  fs.readFile(path.join(__dirname, './cardapio.html'), (err, data) => {
    if(err){
      res.status(500).send("500 - Erro interno do servidor");
    } else { 
      res.status(200).type('text/html').send(data);
    }
  });
});

router.get('/cardapio.js', (req, res) => {
  fs.readFile(path.join(__dirname, '../public/cardapio.js'), (err, data) => {
    if(err){
      res.status(500).send("500 - Erro interno do servidor");
    } else { 
      res.status(200).type('text/javascript').send(data);
    }
  });
});

// Criação dos End-Point - "/bebidas"
router.get('/bebidas', (req, res) => {
  fs.readFile(path.join(__dirname, './bebida.html'), (err, data) => {
    if(err){
      res.status(500).send("500 - Erro interno do servidor");
    } else { 
      res.status(200).type('text/html').send(data);
    }
  });
});

router.get('/bebida.js', (req, res) => {
  fs.readFile(path.join(__dirname, '../public/bebida.js'), (err, data) => {
    if(err){
      res.status(500).send("500 - Erro interno do servidor");
    } else { 
      res.status(200).type('text/javascript').send(data);
    }
  });
});

// Criação dos End-Point - "/pedido"
router.get('/pedido', (req, res) => {
  fs.readFile(path.join(__dirname, './pedido.html'), (err, data) => {
    if(err){
      res.status(500).send("500 - Erro interno do servidor");
    } else { 
      res.status(200).type('text/html').send(data);
    }
  });
});

//  CASO O CAMINHO NÃO FOI ENCONTRADO - STATUS CODE 404:
router.use((req, res) => {
  
  const filePath = path.join(__dirname, './error404.html');
  fs.readFile(filePath, 'utf-8', (err, data) => {

    if (err) {

      res.set({ 'Content-Type': 'text/plain; charset=utf-8' });
      res.status(500).send('ERRO 500 - Erro interno do Servidor');
    } else {

      res.status(404).send(data);
    }
  });
});

// Exportação de router
module.exports = router; 