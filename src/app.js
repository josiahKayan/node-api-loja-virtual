const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config/config');

const app = express();
const router = express.Router();

//CORS
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-type,Accept, x-access-token');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    next();
});

const Product = require('./models/product');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

//BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req,res,next)=>{

        res.status(200).send({
            title: "Node Store API",
            version: "0.0.2"
        });
});

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
