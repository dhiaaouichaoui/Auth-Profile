const mongoose= require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },


}, {linestamps:true})
module.exports= mongoose.model('user',userSchema);