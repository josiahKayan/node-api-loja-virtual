const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product-repository');

exports.get =(req, res, next)=>{
    repository.get().then( x => {
        res.status(200).send(x);
    }).catch( e =>{
        res.status(400).send({message:"Erro ao Listar"});
    });
}

exports.getBySlug =(req, res, next)=>{
    repository.getBySlug(req.body.slug).then( x => {
        res.status(200).send(x);
    }).catch( e =>{
        res.status(400).send({message:"Erro ao Listar"});
    });
}

exports.getById =(req, res, next)=>{
    repository.getById(req.params.id).then( x => {
        res.status(200).send(x);
    }).catch( e =>{
        res.status(400).send({message:"Erro ao Listar"});
    });
}

exports.getByTag =(req, res, next)=>{
     repository
     .getByTag(req.body.tag)
     .then( x => {
        res.status(200).send(x);
    }).catch( e =>{
        res.status(400).send({message:"Erro ao Listar"});
    });
}

exports.post =  (req, res, next)=>{

    var product = new Product(req.body);

    repository.create(product).then( x => {
        res.status(201).send({message:"cadastrado com sucesso"});
    }).catch( e =>{
        res.status(400).send({message:"Erro ao cadastrar"});
    });

};

exports.put = (req, res, next)=>{
   repository
    .update(req.params.id,req.body) 
    .then( x => {
        res.status(201).send({
            message:"Produto atualizado com sucesso"
        });
   } ).catch( e=> {
        res.status(400).send({
            message:"Falha ao atualizar produto"
        });
   });


};

exports.delete = (req, res, next)=>{
    repository.delete(req.params.id)
    .then( x => {
        res.status(201).send({
            message:"Produto deletado com sucesso"
        });
   } ).catch( e=> {
        res.status(400).send({
            message:"Falha ao deletar produto"
        });
   });
};
