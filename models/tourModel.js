const mongose = require("mongoose")
const tourSchema = new mongose.Schema({
    name: String,
    price: Number,
    rating: Number
})

const Tour = mongose.model("Tour",tourSchema)
module.exports = Tour