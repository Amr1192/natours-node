const fs = require("fs")
const express = require("express")
const app = express()

// *Reading and writing from a json file

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
// app.get('/tours',(req,res)=> {
//     res.json(tours)
// })
// app.get('/tours/:id',(req,res)=> {
//     const id = Number(req.params.id)
//     if (id > tours.length - 1) {
//         return res.status(404).send("Tour not found")
//     }
//         res.json(tours[id])
// })

// app.post('/tours', (req,res) => {
//     const id = tours.length 
//     const newtour = {
//         id,
//         content: "hello from new post"
//     }
//     tours.push(newtour)
//     const result = JSON.stringify(tours)
//     fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,result,"utf-8",()=> {
//             res.json(tours)
//             })
//     })




// *: Requiring the router

const tourRouter = require("./routes/tourRouter")
app.use(tourRouter)
module.exports = app
