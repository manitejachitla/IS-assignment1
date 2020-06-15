const express=require('express')
const fs=require('fs')
const router=express.Router()
const datapath="./data/data.json"
router.get("/p",(req,res)=>{
    res.send("router")
    // console.log("hello from router")
})
router.get("/product",(req,res)=>
{
    fs.readFile(datapath,'utf8',(err,data)=>
    {
        if (err) throw err


        res.send(JSON.parse(data))
    })
})

router.get('/product/search',(req,res)=>
{
    // console.log("params",req.params)

    // console.log("query",req.query)

    fs.readFile(datapath,'utf8',((err, data) =>
    {
        if (err) throw  err

        const jdata=JSON.parse(data)
        let arr;
        if (req.query.q===''|| req.query.q===undefined)
        {
            arr=jdata
        }
        else
        {
            arr=jdata.filter((item)=>item.Name.toLowerCase().includes(req.query.q.toLowerCase()))

        }
        const filtered=arr.slice(req.query.offset,req.query.limit)
        const sorted=filtered.sort((a,b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0));
        res.json(sorted)
    }))
})
module.exports=router
