const express = require('express')
const router = express.Router()

router.get('/',(req, res) =>{
    res.render("mascotas", {
        arrayMascotas: [
            {id: 'sdsdsd', nombre: 'rex', descripcion: 'rex descripcion'},
            {id: 'sdsdssdfsdfd', nombre: 'chachan', descripcion: 'chachan descripcion'},
        ]
    })
})



module.exports = router