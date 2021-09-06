const express = require('express')
const app =express()
const mongoose=require('mongoose')
require('dotenv').config()

// Conncet DB 
mongoose.connect(process.env.MONGO_URL,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useFindAndModify: false,
    useUnifiedTopology:true
}).then(()=>console.log('mongoDB Connected'))
.catch((error)=>console.log(error));


app.use(express.json())
app.use('/auth',require("./routes/users"))
const PORT = process.env.PORT || 5000
app.listen(PORT ,()=> console.log("server is connecting"));