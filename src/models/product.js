const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        trim:true,
        index:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    active:{
        type:Boolean,
        required:true,
        default:true
    },
    tags:[{
        type:String,
        required:true
    }]
    ,date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Product',schema);