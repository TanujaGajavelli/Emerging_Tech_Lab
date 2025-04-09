const List = require('../models/Listings.model.js')

//add a listing
async function addList(req, res){
    try{
        let newList = req.body        
        newList.imageName = req.file.filename
        let data = await List.create(newList)
        res.status(201).send(data)
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}
//Retrieve all the listings
async function getAllList(req, res){
    try {
        let lists = await List.find()
        res.send(lists)
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}

//Retrieve list by Id
async function getListById(req, res){
    try {
        let { id } = req.params
        let lists = await List.findOne({_id: id})
        if(lists){
            res.send(lists)
        } else {
            res.status(404).send({"message": "Invalid id"})
        }
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}
//Update List details without image
async function updateList(req, res){
    try{
        let lists = req.body
        let { id } = req.params
        console.log(lists)
        lists = await User.findOneAndUpdate({_id: id}, lists, {new: true})
        if(lists){
            res.status(200).send(lists)
        } else {
            res.status(404).send({"message": "Invalid id"})
        }
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}

//Update List image based on ID.
const updateListImage = async (req, res) => {
    try {
        let { id } = req.params
        let fileName = req.file.filename
        let lists = await List.findOneAndUpdate({_id: id}, {"ListImage": fileName}, {new: true})
        res.status(200).send(lists)
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}

//Delete list details
async function deleteList(req, res){
    try{
        let { id } = req.params
        let lists = await List.findOneAndDelete({_id: id})
        if(lists){
            res.status(200).send(lists)
        } else {
            res.status(404).send({"message": "Invalid id"})
        }
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}

async function search(req,res){
    try{
        let {toSearch}=req.params
        let ans=db.List.find({"itemName":{$regex: `${toSearch}`}})
        res.status(200).send(ans)
    }
    catch(error){
        res.status(400).send({"message":error.message})
    }
}

module.exports = {
    addList,
    getAllList,
    getListById,
    updateList,
    updateListImage,
    deleteList,
    search
    }