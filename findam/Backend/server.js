const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")


const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(bodyParser.json())

const userRoute = require("./Routes/userRoute")

//route middleware
app.use("/api/users", userRoute);

//Routes 
app.get("/", (req , res) =>{
    res.send("Dashboard");
})
//connecting to mongodb and start server

const PORT = process.env.PORT || 8080;

mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        app.listen(PORT, () => {
            console.log(`server Running on port ${PORT}`)
        })
      })
      .catch((err) => console.log(err))

