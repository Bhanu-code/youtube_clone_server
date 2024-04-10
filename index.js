const express = require('express');

//importing environmental files
const dotenv = require('dotenv')
dotenv.config();

const cookieParser = require('cookie-parser');


const app = express();
app.use(express.json());
app.use(cookieParser());

const cors = require('cors');
app.use(cors());

//importing routes
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const userModel = require('./models/userModel');

//specifying routes
app.use("/", userRoute);
app.use("/auth", authRoute);



app.listen(5000, ()=>{
    console.log("server is up at 5000");
})