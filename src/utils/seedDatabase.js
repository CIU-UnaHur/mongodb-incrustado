//const Libro = require('../models/libro.model')
const Autor = require('../models/autor.model')

async function seedDatabase() {
    try {
        await Autor.deleteMany({})
        //await Libro.deleteMany({})

        const autores = await Autor.insertMany([
            {
                nombre: 'Gabriel García Márquez',
                nacionalidad: 'Colombiana', 
                fechaNacimiento: new Date('1927-03-06'),
                libros: [
                    { titulo: 'Cien años de soledad', genero: 'Realismo mágico', fechaPublicacion: new Date('1967-05-30') },
                    { titulo: 'La casa de los espíritus', genero: 'Realismo mágico', fechaPublicacion: new Date('1982-01-01') }
                ]
            },
            { nombre: 'Isabel Allende', 
                nacionalidad: 'Chilena', 
                fechaNacimiento: new Date('1942-08-02'),
                libros: [
                    { titulo: 'Harry Potter y la piedra filosofal', genero: 'Fantasía', fechaPublicacion: new Date('1997-06-26') }
                ]
             }
        ])

        //const libros = await Libro.insertMany([
        //    { titulo: 'Cien años de soledad', genero: 'Realismo mágico', fechaPublicacion: new Date('1967-05-30') },
        //    { titulo: 'La casa de los espíritus', genero: 'Realismo mágico', fechaPublicacion: new Date('1982-01-01') },
        //    { titulo: 'Harry Potter y la piedra filosofal', genero: 'Fantasía', fechaPublicacion: new Date('1997-06-26') }
        //])

        autores[0].nacionalidad = 'Argentina'
        await autores[0].save()

        await Autor.deleteOne({nombre: 'Isabel Allende'})


    } catch (error) {
        console.error('Error al poblar la base de datos:', error)
    }
}

module.exports = seedDatabase