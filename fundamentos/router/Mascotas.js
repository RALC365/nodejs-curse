const express = require('express')
const router = express.Router()

const Mascota = require('../models/mascota')
const { route } = require('./RutasWeb')


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

router.get('/crear',(req, res) => {
    res.render('crear')
} )

router.post('/',async(req,res) => {
    const body = req.body
    try {
        /* Método 1
        //creamos una nueva mascota
        const mascotaDB = new Mascota(body)
        //guardamos la mascota en MongoDB
        await mascotaDB.save()
        //console.log(mascotaDB)
        res.redirect('/mascotas')
        */

        //Método 2
        await Mascota.create(body)
        res.redirect('/mascotas')
        
    } catch (error) {
        console.log(error)
    }
})

//Obtener una única mascota
router.get('/:id', async(req, res) => {
    const id = req.params.id
    try {
        //MongoDB trabaja con _id
        const mascotaDB = await Mascota.findOne({_id: id})
        console.log(mascotaDB)
        res.render('detalle',{
            mascota: mascotaDB,
            error: false
        })
    } catch (error) {
        console.log(error)
        res.render('detalle',{
            error: true,
            mensaje: 'No se encuentra el ID seleccionado'
        })
    }
})

router.delete('/:id', async(req, res) => {
    const id = req.params.id

    try {
        const mascotaDB = await Mascota.findByIdAndDelete({_id: id})
        if(mascotaDB){
            res.json({
                estado: true,
                mensaje: "eliminado!"
            })
        }else{
            res.json({
                estado: false,
                mensaje: "Fallo eliminar!"
            })

        }


    } catch (error) {
        console.log(error)
    }
})


router.put('/:id', async(req, res) => {
    const id = req.params.id
    const body = req.body


    try {

        const mascotaDB = await Mascota.findByIdAndUpdate(
            id, body, {useFindAndModify: false}
        )

        console.log(mascotaDB)

        res.json({
            estado: true,
            mensaje: "Editado"
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: "Fallo Editado"
        })
    }

})

module.exports = router