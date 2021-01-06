const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

const app = express()

//capturar el body
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//conexión a la base de datos
const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.nmwrc.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
const option = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(uri, option)
.then(()=> console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))

//import routes
const authRoutes = require('./routers/auth')
const validaToken = require('./middleware/validate-token')
const admin = require('./routers/admin')

//routes middlewares
app.use('/api/user', authRoutes)
app.use('/api/admin', validaToken, admin)

app.get('/',(req,res) => {
    res.json({
        estado: true,
        mensaje: 'funciona'
    })
})


// iniciar el server
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Servidor andando en: ${PORT}`)
})