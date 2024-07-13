const express = require("express");
const dbconnect = require("./config/connection");
const app = express();

app.listen(3000,()=>{
    console.log("App started successfully")
})

dbconnect();
//middleware to parse the request body
app.use(express.json());

//import routes

const todoRoutes= require("./routes/Todos");

app.use("/api/v1",todoRoutes);
app.get("/",(req,res)=>{
    res.send(`<h1>This is homeoage</h1>`)
})

