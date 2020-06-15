const express=require('express')
const fs=require('fs')
const cors=require('cors')
const datapath="./data/data.json"
const bodyparser=require('body-parser')
const app=express()
const productroute=require('./routes/product')
app.use(bodyparser.json())
app.use(cors())
app.get('/',(req,res)=>
{
    res.send("hello from server")
})
app.use(express.static('public'))
app.use(productroute)
app.listen(4000,()=>
{
    console.log("server started on port 4000")
})
