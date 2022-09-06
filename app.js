const express = require ('express')
const app = express()
const port = 3000;
var cookieParser = require('cookie-parser')

app.get('/', (req,res) => res.send('Hello World'));

app.get('/login', (req,res) =>{
    res.cookie('name', "John Doe").send('username set')
} )

app.get('/hello', (req,res) =>{
res.send(`Hello ${req.cookies.name}`)
})

app.listen(port, ()=> console.log('Listening on port 3000'))