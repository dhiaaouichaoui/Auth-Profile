const  router = require('express').Router()
const User=require('../models/user');
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken');
const {requireLogin}= require('../middleware/auth')

// USER REGISTER
router.post('/register',async( req,res)=>{
    const {name ,email,password}=req.body
    try{
        let user= await User.findOne({email})
        if(user){
            return res.status(400).json({error:'user already exist'})
        }
        const hashed_password=await bcrypt.hash(password,10)
        user=new User({
            name,
            email,
            password:hashed_password
        }) 
        await user.save()
        return res.status(201).json({message:'user created succesfully'})

    }catch(err){
        console.log(err)
    }
});
//login user
router.post('/login',async (req,res)=>{
    const {email, password}=req.body
    try{
        let user= await User.findOne({email})
        if(!user){
            return res.status(400).json({error:'Invalid '})
        }
        const Ismatch =await bcrypt.compare(password,user.password)
        if(!Ismatch){
            return res.status(400).json({error:'Invalid '})

        }
        const token =jwt.sign({id:user._id},process.env.JWT_SECRET,{
             expiresIn:'lh',
        });
        return res.json({token})
    }catch(err){
        console.log(err)
    }
});
router.get('/',requireLogin, async (req,res)=>{
    try{
        const user = User.findById()
    }catch(err){
        console.log(err);
    }
})
module.exports=router