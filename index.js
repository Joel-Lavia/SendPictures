const express = require("express");
const app = express();
const dontenv = require("dotenv");
const UserRoute = require("./routes/users");
const pictureRoute = require("./routes/pictures");
app.use(express.json());
dontenv.config();
const PORT = process.env.PORT;

//endPoint

app.get("/",(req,res)=>{
res.json("hey")
})

app.use("/",UserRoute);
app.use("/",pictureRoute)


app.listen(PORT, ()=> console.log(`server running in PORT ${PORT}`));

