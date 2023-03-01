const express = require("express")
const router = express.Router()
const Users = require("../model/user")
router.post("/addData",async (req,res)=>{
    const {name,email,location,profession,DOB} = req.body
    if(!name||!email||!location||!profession||!DOB){
        return (
            res.status(422).json({
                message:"empty field"
            })
        )
    }
    try{
        const user = await Users.findOne({email:email})
        if(user){
            return (res.status(422).json({message:"please enter valid data"}))
        }
        else{
            const data = await Users.create({name,email,location,profession,DOB})
            res.json({
                status:"registration succesful",
                data
            })
        }
    }catch(e){
        console.log(e.message)
    }
})

router.get("/getData",async(req,res)=>{
    const data = await Users.find()
    res.json({
        data
    })
})

module.exports=router