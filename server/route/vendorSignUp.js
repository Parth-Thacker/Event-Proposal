const express = require("express")
const router = express.Router()
const Vendors = require("../model/vendor")
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
        const vendor = await Vendors.findOne({email:email})
        if(vendor){
            return res.status(400).json({
                message:"Empty Field"
            })
        }
        if(!vendor && (password===confirmPassword)){
           const vendor = await Vendors.create({name,email,contact,password,confirmPassword})
           res.json({
            data:vendor,
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
        const vendor = Vendors.findOne({contact:contact})
        if(!vendor){
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