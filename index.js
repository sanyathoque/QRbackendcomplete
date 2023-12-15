const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
var cors = require('cors');
const cookieParser = require("cookie-parser")
//Import Routes
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
// const imagesRoute = require('./routes/images')
dotenv.config()

//Connect to DB
// Connect to DB
mongoose.connect("mongodb+srv://Sanyat:Sanyat1234@cluster0.r6sod.mongodb.net/social?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('Connected to dB'))
    .catch((err) => console.log(err))
// Connect to DB
// mongoose.connect("mongodb+srv://dBUser:dBUser@atlascluster.dp8oxjp.mongodb.net/social?retryWrites=true&w=majority", { useNewUrlParser: true })
// .then(() => console.log('Connected to dB'))
// .catch((err) => console.log(err))
// mongoose.connect("mongodb+srv://dBUser:dBUser@atlascluster.dp8oxjp.mongodb.net/social?retryWrites=true&w=majority", { useNewUrlParser: true })
// .then(() => console.log('Connected to dB'))
// .catch((err) => console.log(err))


//Middeware
app.use(express.json())
app.use(cookieParser());
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});
//Route Middlewares
app.use('/api/auth', authRoute)
// app.use('/api/images', imagesRoute)


app.listen(5000, () => console.log('Server Up and Running'))