const express = require("express")
const router = express.Router()
const Users = require("../model/users")
router.get('/signup',(req,res)=>{
    res.send("ok")
})
router.post("/register",async (req,res)=>{
    const {name,email,contact,password,confirmPassword} = await req.body
    console.log(req.body)
    try{
        if(!name||!email||!contact||!password||!confirmPassword){
            return res.status(400).json({
                message:"Empty Field"
            })
        }
        const user = await Users.findOne({email:email})
        if(user){
            return res.status(400).json({
                message:"Empty Field"
            })
        }
        if(!user && (password===confirmPassword)){
           const user = await Users.create({name,email,contact,password,confirmPassword})
           res.json({
            data:user,
            message:"Registratin Successful"
           })
        }
        
    }catch(e){
        console.log(e.message)
    }

})

router.post("/signin",(req,res)=>{
    const {contact,password} = req.body
    try{
        if(!contact || !password){
            return res.status(400).json({
                message:"Empty Field"
            })
        }
        const user = Users.findOne({contact:contact})
        if(!user){
            return res.status(400).json({
                message:"Invalid Credentials"
            })
        }
        else{
            res.status(200).json({
                message:"LoIn successful"
            })
        }
    }catch(e){
        console.log(e.message)
    }
    
})

module.exports = router