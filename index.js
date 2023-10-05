//  Servidor
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser') // Decodifica forms

const userRoute = require('./src/routes/user.route')

//  Banco de dados
const conectDatabase = require('./src/database/db')

// Inicia o banco de dados
conectDatabase()

// Middlewares
app.use(bodyParser.urlencoded({extended: false})) // Decodifica forms

// front-end
const caminhoStatic = __dirname + '/src/public'
const middlewarePublic = express.static(caminhoStatic)
app.use('/public', middlewarePublic)

app.get('/', (req, res) => {
    const caminhoIndex = __dirname + '/src/views/index.html'

    res.sendFile(caminhoIndex)
})

// back-end
app.use('/name', userRoute)

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))