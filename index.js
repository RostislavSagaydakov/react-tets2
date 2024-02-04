const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 5000

async function start(){
    try {
        await mongoose.connect("mongodb+srv://admin:admin123@react.rikougk.mongodb.net/")
        app.listen(PORT, ()=> {
            console.log('serv on port', PORT)
        })
    } catch(e) {
        console.error(e)
    }
}

start();