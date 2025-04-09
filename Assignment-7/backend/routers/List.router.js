const express = require('express')

const {
    addList,
    getAllList,
    getListById,
    updateList,
    updateListImage,
    deleteList,
    search
} = require('./../controllers/listing.controller.js')

const upload = require('./../middleware/fileUpload.middleware.js')
const ListRouter = express.Router()

ListRouter.post("/", upload.single('imageName'), addList)
ListRouter.get("/", getAllList)
ListRouter.get("/:id",getListById)
ListRouter.get("", updateList)
ListRouter.put('/:id', upload.single('imageName'), updateListImage)
ListRouter.delete('/:id', deleteList)
ListRouter.get('/:id',search)


module.exports = ListRouter