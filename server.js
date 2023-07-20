const express = require('express')
const serverConfig = require('./config/server.config.js')
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config.js')

const app = express()

// logic to connect to mongoDB and create an admin user
mongoose.connect(dbConfig.DB_URL)

const db = mongoose.connection;

db.on("error",()=>{
    console.log("Error while connection to DB");
})
db.once("open",()=>{
    console.log("DB is connected");
})

app.listen(serverConfig.PORT,()=>{
    console.log(`server stated at port ${serverConfig.PORT}`);
})
