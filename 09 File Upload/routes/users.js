const express = require("express");

const db = require("../data/database");
const router = express.Router();
//multer and its upload object should be used only in the route where a file upload is expected.
const multer = require("multer");
//const upload = multer({ dest: "images" }); dest: images just store the image without extension. To add aditional data use storage object
const storageConfig = multer.diskStorage({
  destination: function (req, file, callbackFunction) {
    callbackFunction(null, "images");
  },
  filename: function (req, file, callbackFunction) {
    callbackFunction(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storageConfig });

router.get("/", async function (req, res) {
  const authorProfiles = await db
    .getDb()
    .collection("authors")
    .find()
    .toArray();
  res.render("profiles", { profiles: authorProfiles });
});

router.get("/new-user", function (req, res) {
  res.render("new-user");
});

//multer object's function is added for /profiles route.
//Functions in router will be executed from left to right
//multer will take care of other form elements in addition to file upload
router.post("/profiles", upload.single("image"), function (req, res) {
  const uploadedFile = req.file;
  const userData = req.body;
  db.getDb().collection("authors").insertOne({
    authorName: userData.username,
    imagePath: uploadedFile.path,
  });
  res.redirect("/");
});

module.exports = router;
