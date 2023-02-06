const { Schema, model } = require('mongoose')

const noteSchema = new Schema({ //la id no la necesitamos
    content: String,
    date: Date,
    important: Boolean
})

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Note = model('Note', noteSchema)

module.exports = Note

const note = new Note({
    content: 'PROBANDO CAMBIOS EN EL SCHEMA',
    date: new Date(),
    important: true
})

note.save()
    .then(result => {
        console.log(result)
        mongoose.connection.close()
    })
    .catch(err => {
        console.error(err)
    }) //mongoose siempre devuelve una promesa
