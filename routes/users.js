const express = require("express");
const { PostUsers } = require("../controllers/users");
const UserRoute = express.Router();
UserRoute.post("/users",PostUsers);

module.exports = UserRoute;