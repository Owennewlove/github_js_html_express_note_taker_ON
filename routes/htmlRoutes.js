const router=require("express").Router()
const path=require("path")

//req = request and res = response so req. response if client initiats the call back so if api json, no api = html
router.get("/notes",(req,res)=>{

    res.sendFile(path.join(__dirname,'../public/notes.html') )
})

router.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html') )
})

module.exports=router