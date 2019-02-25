var express = require("express");

var router = express.Router();

var model = require("../models/burger.js");

router.get("/", function (req, res) {
    model.selectAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/orders", function (req, res) {
    model.insertOne("burger_name", "devoured", req.body.name, req.body.devoured, function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/orders/:id", function (req, res) {
    var id = req.params.id;

    //updates to devoured
    model.updateOne("devoured", 1, "id", id, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/orders/", function (req, res) {

    model.deleteAll(function (result) {
        res.status(200).end();
    });
});

module.exports = router;