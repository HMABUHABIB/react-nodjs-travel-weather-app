var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/weakup", function (req, res, next) {
  console.log(process.env);
  res.json({ NAME: process.env.SAMER });
});

module.exports = router;
