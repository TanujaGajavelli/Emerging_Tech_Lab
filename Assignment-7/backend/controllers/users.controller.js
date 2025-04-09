const User=require("./../models/users.model.js")
async function addUser(req,res){
    try{
        let newUser=req.body
        let user=await User.create(newUser)
        console.log(user);
        
        res.status(201).send(user)
    }
    catch(err){
        res.status(400).send({"message":err.message})
    }
}

async function retrieveAllUsers(req,res) {
    try{
        let AllUsers=await User.find()
        res.send(AllUsers)
    }
    catch(error){
        res.status(400).send({"message":error.message})        
    }
}

async function retrieveById(req,res) {
    try{
        let {id}=req.params
        let users=await User.findOne({_id:id})
        if(users){
            res.send(users)
        }
        else{
            res.status(400).send({"message":"Invalid id"})
        }
    }
    catch(error){
        res.status(400).send({"message":error.message})        
    }
}

async function retrieveBySIC(req,res) {
    try{
        let {id}=req.params
        let users=await User.findOne({$or:[{"SIC":id},{"mobile":id},{"email":id}]})
        if(users){
            res.send(users)
        }
        else{
            res.status(404).send({"message":"Invalid SIC/email/mobile"})
        }
    }
    catch(error){
        res.status(400).send({"message":error.message})        
    }
}

async function updateBySIC(req,res){
    try{
        let {id}=req.params
        let user=req.body
        user=await User.findOneAndUpdate({"SIC":id},user,{new:true})
        if(user){
            res.status(200).send(user)
        } else {
            res.status(404).send({"message":"Invalid SIC"})
        }
    }
    catch(error){
        res.status(400).send({"message":error.message})
    }
}

async function deleteBySIC(req,res){
    try{
        let {id}=req.params
        let user=req.body
        user=await User.findOneAndDelete({"SIC":id})
        if(user){
            res.status(200).send(user)
        } else {
            res.status(404).send({"message":"Invalid SIC"})
        }
    }
    catch(error){
        res.status(400).send({"message":error.message})
    }
}
module.exports={addUser,retrieveAllUsers,retrieveById,retrieveBySIC,updateBySIC,deleteBySIC}