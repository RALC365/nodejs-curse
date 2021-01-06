const express = require('express')
const router = express.Router()

//Solicitudes con respuestas
router.get('/', (req, res) => {
    //resp.send("Mi respuesta desde express v2")
    res.render('index',{titulo: 'mi titulo dinámico'})
})

router.get('/servicios', (req, res) => {
    res.render('servicios',{tituloServicio: 'Este es un mensaje dinámico de servicio'})

})

module.exports = router