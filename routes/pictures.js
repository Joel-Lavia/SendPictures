const express = require("express");
const { postPictures } = require("../controllers/Pictures");
const pictureRoute = express.Router();
pictureRoute.post("/PostPictures",postPictures);


module.exports = pictureRoute;