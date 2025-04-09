const mongoose = require('mongoose')

const Listings  = new mongoose.Schema({
    itemName :{
        type: String,
        required: true
    },
    category :{
        type: String,
        required: true,
        enum: ['Books', 'Electronics','Engineering Equipments','Stationary', 'Sports Equipments', 'Clothing', 'Others']
    },
    description: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true,
        enum: ['New', 'Good', 'Poor']
    },
    price :{
        type: Number,
        required: true
    },
    imageName : {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Available', 'Sold']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }
}, {
    timestamps: true
})

const List = mongoose.model("Listings", Listings)

module.exports = List