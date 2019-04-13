const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get =()=>{
    return Product
        .find({
            active:true
        },'title slug description price tags');
}

exports.getBySlug =(slug)=>{
    Product.findOne(
        {
            active:true,
            slug:slug
        },'title slug description price tags');
}

exports.getById =(id)=>{
    return Product
    .findById(id);
}

exports.getByTag =(tag)=>{
    return Product.find(
        {
            active:true, 
            tags:tag
        },'title slug description price tags');
}

exports.create =(data)=>{

    var product = new Product(data);
    return product.save();

};

exports.update = (id,data)=>{
   return Product.findOneAndUpdate(id ,{
        $set:{
            title: data.title,
            description: data.description,
            price : data.price
        }
   });
};

exports.delete = (id)=>{
    return Product.findOneAndRemove(id);
};
