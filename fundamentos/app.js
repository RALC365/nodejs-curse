const express = require('express')
//Nos ayudará con el CRUD - Express, MongoDB
const bodyparser = require('body-parser')
const app = express()


app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//variables de entorno
require('dotenv').config()

//En el deploy el puerto lo proporciona el hosting, asi que hay que hace2rlo dinámico
const puerto = process.env.PORT || 3000

//Conexión a Base de Datos
const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.nmwrc.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(uri, 
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

//motor de plantillas
app.set('view engine', 'ejs')
//donde estarán mis plantillas
app.set('views',__dirname + '/views')

//archivos estáticos - Middleware
app.use(express.static(__dirname + '/public'))

//Rutas de la API
app.use('/',require('./router/RutasWeb'))
app.use('/mascotas',require('./router/Mascotas'))


//Página 404 - responde siempre y cuando no encuentre una ruta configurada - middleware
app.use((req, res, next) => {
    //res.status(404).sendFile(__dirname + '/public/404.html')
    res.status(404).render('404', {
        titulo: '404',
        descripcion: 'No existe la página que esta buscando'

    })
})

//Escuchando las solicitudes
app.listen(puerto, () => {
    console.log("Servidor a su servicio en el puerto ", puerto)
})