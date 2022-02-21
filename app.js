const express = require('express')

const app = express()

const path = require('path')

const pathPublic= path.resolve(__dirname, 'public')

app.use(express.static(pathPublic))

app.listen(process.env.PORT || 3000, function () {
    console.log('Servior corriendo!!!');
})

app.get('/', ( req, res) =>{
    res.sendFile(__dirname + "/views/home.html")
} )

app.get('/register', ( req, res) =>{
    res.sendFile(__dirname + "/views/register.html")
} )

app.get('/login', ( req, res) =>{
    res.sendFile(__dirname + "/views/login.html")
} )