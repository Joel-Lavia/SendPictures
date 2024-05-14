const express = require("express");
const { postPictures } = require("../controllers/Pictures");
// const upload = require("../middlewares/multer");

const pictureRoute = express.Router();
pictureRoute.post("/PostPictures",postPictures);


module.exports = pictureRoute;