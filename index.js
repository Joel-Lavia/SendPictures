const express = require("express");
const app = express();
const dontenv = require("dotenv");
dontenv.config();
const PORT = process.env.PORT;

//endPoint

app.get("/",(req,res)=>{
res.json("hey")
})

app.listen(PORT, ()=> console.log(`server running in PORT ${PORT}`));
