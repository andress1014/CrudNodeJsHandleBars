//modulos
const { json } = require('express')
const express = require('express')
const router = express.Router()
const Registro = require('../model/Registro')
//rutas
router.get('/registro', (req, res) => {
    res.render('registros/registro')
})

router.post('/registrarPersona', async (req, res) => {
    const { nombre, edad, correo } = req.body
    const nuevaPersona = new Registro({ nombre, edad, correo })
    console.log(newPersona)
    await nuevaPersona.save()
    res.redirect('/Personas')
})

router.get('/Personas', async (req, res) => {
    const data = await Registro.find()
  
    res.json(data)
})
module.exports = router