const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config/config');

const app = express();
const router = express.Router();

const Product = require('./models/product');

//Carrega as Rotas
// const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

//BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app.use('/',indexRoute);
app.use('/products',productRoute);

//Banco
const url = config.bd_string;

const options = {   poolSize:5, useNewUrlParser:true };

mongoose.connect(url , options);

mongoose.set('useCreateIndex',true);

mongoose.connection.on('error',(err)=>{
    console.log('Erro de conexão'+err);
});
mongoose.connection.on('disconnect',(err)=>{
    console.log('Disconectado '+err);
});
mongoose.connection.on('connected',()=>{
    console.log('Aplicação conectada ');
});

module.exports = app; 
