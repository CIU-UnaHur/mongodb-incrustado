const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const libroSchema = new mongoose.Schema({
    titulo: {
        type: Schema.Types.String,
        required: true
    },
    genero: {
        type: Schema.Types.String,
        required: true
    },
    fechaPublicacion: {
        type: Schema.Types.Date,
        required: true
    }
})

const autorSchema = new mongoose.Schema({
    nombre: {
        type: Schema.Types.String,
        required: true
    },
    fechaNacimiento: {
        type: Schema.Types.Date,
        required: true
    },
    nacionalidad: {
        type: Schema.Types.String,
        required: true
    },
    libros: [libroSchema]
})

module.exports = mongoose.model('Autor', autorSchema)