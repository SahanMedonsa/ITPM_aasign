//dependencies calling
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

//port declair
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.json());

//connect mongoose
mongoose.connect(process.env.link,{
    useNewUrlPaser:true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("mongoDB connection success!");
});

app.listen(PORT, ()=> {
    console.log(`The server is running on PORT ${PORT}`)
})