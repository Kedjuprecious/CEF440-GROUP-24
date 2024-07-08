const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const errorHandler = require("./MiddleWare/errorMiddleware");
const cookieParser = require("cookie-parser");

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended : false}))
app.use(bodyParser.json());
app.use(cors());


const userRoute = require("./Routes/userRoute")
const objectRoute = require("./Routes/objectRoute")

//route middleware
app.use("/api/users", userRoute);
app.use("/api/objects", objectRoute);

//Routes 
app.get("/", (req , res) =>{
    res.send("Dashboard");
});
//error middleware

app.use(errorHandler);

//connecting to mongodb and start server

const PORT = process.env.PORT || 5000;

mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        app.listen(PORT, () => {
            console.log(`server Running on port ${PORT}`)
        })
      })
      .catch((err) => console.log(err))

