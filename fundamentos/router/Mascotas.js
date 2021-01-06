const express = require('express')
const router = express.Router()

const Mascota = require('../models/mascota')


router.get('/', async (req, res) =>{
    try {
        //aqui traemos todos los documentos de la colección mascotas
        const arrayMascotasDB = await Mascota.find()
        //console.log(arrayMascotasDB)

        res.render("mascotas", {
            arrayMascotas: arrayMascotasDB
        })

    } catch (error) {
        console.log(error)
    }

    
})



module.exports = router