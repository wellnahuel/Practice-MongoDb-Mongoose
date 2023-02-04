const mongoose = require('mongoose')  //LO PRIMERO QUE HACEMOS LUEGO DE INSTALARLO
const password = require('./password.js')
const connectionString = `mongodb+srv://nahuelcittadino:${password}@wellnahuel.v4gjjie.mongodb.net/welldb?retryWrites=true&w=majority`
//const { model, Schema } = mongoose;

//conexion a mongodb
mongoose.set("strictQuery", false);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //UseFindAndModify: false,
    //useCreateIndex: true
})
    .then(() => {
        console.log('Database connected :D')
    }).catch(err => {
        console.error(err)
    })

//definir Schema , luego definimos modeloos

const noteSchema = new Schema({ //la ido no la necesitamos
    content: String,
    date: Date,
    important: Boolean
})


//con Note puedo crear instancias del modelo

const Note = model('Note', noteSchema) 

 //el nombre del modelo es en SINGULAR (las colecciones van en plural)

//EL SCHEMA ES A NIVEL DE APLICACION! NO DE BASE DE DATOS

//Creacion de una nota

/* Note.find({}).then(result => {
    console.log(result)
    mongoose.connection.close()
}) */


/* 
  "id": 1,
    "content": "Me tengo que suscribir a @midudev en YouTube",
    "date": "2019-05-30T17:30:31.098Z",
    "important": true
*/