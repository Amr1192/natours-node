const Tour = require("../models/tourModel")

exports.getAllTours =function(req, res) {
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
}
