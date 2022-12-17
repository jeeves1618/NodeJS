const express = require("express");

const router = express.Router();

router.get("/", getIndex);
router.get("/index", getIndex);
router.get("/about", getAbout);

function getIndex(request, response) {
  response.render("index");
}

function getAbout(request, response) {
  response.render("about");
}

module.exports = router;
