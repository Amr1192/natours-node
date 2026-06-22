const express = require("express")
const router = express.Router()
const Tour = require("../models/tourModel")
const tourController = require("../controllers/tourController")
router.get("/",tourController.getAllTours)
module.exports = router

