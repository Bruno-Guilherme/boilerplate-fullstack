const mongoose = require('mongoose')

const conectDatabase = () => {
    console.log(`Conectando ao banco de dados.`)

    mongoose.connect(
        'mongodb+srv://admin:admin@cluster0.yjhgpg4.mongodb.net/?retryWrites=true&w=majority', 
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(
        () => {
            console.log("Conectado com sucesso")
        }
    )
    .catch(
        (error) => {
            console.log(error)
        }
    )
}

module.exports = conectDatabase