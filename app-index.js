const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'));


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '.../index.html'))
})