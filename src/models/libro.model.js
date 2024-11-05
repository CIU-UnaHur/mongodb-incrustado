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

module.exports = mongoose.model('Libro', libroSchema)