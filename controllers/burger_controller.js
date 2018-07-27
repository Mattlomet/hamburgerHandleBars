var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var Burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    Burger.selectAll(function (data) {
        var burgers = {
            burger: data
        };
        res.render("index", burgers);
    });
});

router.post("/add", function (req, res) {
    console.log(req.body)
    Burger.insertOne(req.body.burger_name, req.body.devoured, function (result) {
        // Send back the ID of the new quote
        console.log(result);
        res.json({
            id: result.insertId
        });
    });
});

router.put("/change", function (req, res) {

    Burger.updateOne(req.body.trueFalse, req.body.id, function (result) {
       console.log(result);
       res.json({
           id: result.insertId
       });
    });
});

// Export routes for server.js to use.
module.exports = router;