const express = require("express")
const router = express.Router()
const Tour = require("../models/tourModel")

router.get("/tours", (req, res) => {
    Tour.find()
        .then(tours => {
            res.json(tours);
        })
        .catch(err => {
            res.status(500).json({
                status: "error",
                message: err.message
            });
        });
});
module.exports = router

