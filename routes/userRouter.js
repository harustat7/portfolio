const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Users Home Page");
});

module.exports = router;
