const { Schema, model } = require('mongoose')

const noteSchema = new Schema({ //la id no la necesitamos
    content: String,
    date: Date,
    important: Boolean
})

const Note = model('Note', noteSchema) 

module.exports = Note

/*  const note = new Note({
    content: 'MongoDB es increible, midu',
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
  */