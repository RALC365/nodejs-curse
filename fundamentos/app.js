const express = require('express')
const app = express()

//En el deploy el puerto lo proporciona el hosting, asi que hay que hace2rlo dinámico
const puerto = process.env.PORT || 3000

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