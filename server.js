const { response } = require('express') // this is named import 
const express = require('express') // this is default import
require('dotenv').config() // to use variables from .env file


const app = express(); 

app.use(express.json());

app.use(express.static(__dirname + "/public/"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

var mat = require('./routes/mat')

app.use('/mat', mat)

// app.use('/dataForTable', mat)


app.listen(4000, () => {
    console.log('server running ... 4000')
})
