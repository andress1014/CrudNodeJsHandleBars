const mongoose = require('mongoose')
const { Schema } = mongoose
const RegistroSchema = new Schema({
    nombre: { type: String, require: true },
    edad: { type: String, require: true },
    correo: { type: String, require: true },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('persona', RegistroSchema)