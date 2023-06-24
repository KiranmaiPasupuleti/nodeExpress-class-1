const express = require('express')
const app = express()

app.get('/', (request,response) => {
    response.send('Hello world!')
})

app.get('/today-date',(req,res) => {
    let date = new Date()
    res.send(`Today's date is ${date}`)
})

app.get('/html-file',(req,res) => {
    res.sendFile('./page.html',{root:__dirname})
})

app.get('/html-flower-file',(req,res) => {
    res.sendFile('./app/app.html',{root: __dirname})
})

app.listen(3004)