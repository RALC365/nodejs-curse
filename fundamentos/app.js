const express = require('express')
const app = express()

//En el deploy el puerto lo proporciona el hosting, asi que hay que hace2rlo dinámico
const puerto = 3000

//archivos estáticos - Middleware
app.use(express.static(__dirname + '/public'))



//Solicitudes con respuestas
app.get('/', (req, resp) => {
    //console.log(__dirname)
    resp.send("Mi respuesta desde express v2")
})

app.get('/servicios', (req, resp) => {
    resp.send("estas en la página de servicios")
})

//Página 404 - responde siempre y cuando no encuentre una ruta configurada
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html')
})

//Escuchando las solicitudes
app.listen(puerto, () => {
    console.log("Servidor a su servicio en el puerto ", puerto)
})