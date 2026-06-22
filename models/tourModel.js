const mongose = require("mongoose")
const connection = mongose.connect(process.env.DB_CONNECTION).then(()=>console.log("Database connected successfully 👌")).catch((err)=>console.log(err))
const tourSchema = new mongose.Schema({
    name: String,
    price: Number,
    rating: Number
})

const Tour = mongose.model("Tour",tourSchema)
module.exports = Tour