const mongoose = require('mongoose')  //LO PRIMERO QUE HACEMOS LUEGO DE INSTALARLO
const password = require('./password.js')
const connectionString = `mongodb+srv://nahuelcittadino:${password}@wellnahuel.v4gjjie.mongodb.net/notes?retryWrites=true&w=majority`

//conexion a mongodb
mongoose.set("strictQuery", false);

mongoose.connect(connectionString ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //UseFindAndModify: false,
    //useCreateIndex: true
})
.then (()=> {
    console.log('Database connected :D')
}).catch(err => {
    console.error(err)
})