const express = require("express");
const app = express();
const dontenv = require("dotenv");
const UserRoute = require("./routes/users");
const pictureRoute = require("./routes/pictures");
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
dontenv.config();
const PORT = process.env.PORT;

//endPoint

app.get("/",(req,res)=>{
res.json("hey")
})

app.use("/",UserRoute);
app.use("/",pictureRoute)

//..............................................
// uploadAndProcessImage();

app.listen(PORT, ()=> console.log(`server running in PORT ${PORT}`));

