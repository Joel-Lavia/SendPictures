const express = require("express");
const app = express();
const dontenv = require("dotenv");
const UserRoute = require("./routes/users");
const pictureRoute = require("./routes/pictures");
const cors = require("cors");
const multer = require("multer");
const uploadAndProcessImage = require("./uploads/cloudinary");
const upload = multer({dest:"./uploads"});

app.use(express.json());
// app.use(cors());
// app.use(multer());


dontenv.config();
const PORT = process.env.PORT;

//endPoint

app.get("/",(req,res)=>{
res.json("hey")
})

app.use("/",UserRoute);
app.use("/",pictureRoute)
//..............................................
uploadAndProcessImage();

app.listen(PORT, ()=> console.log(`server running in PORT ${PORT}`));

