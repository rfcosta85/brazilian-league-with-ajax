const bodyParser = require('body-parser') /* Responsável por realizar o bodyParser da requisição */
const express = require('express')
const app = express()

//MiddleWare 

app.use(express.static('.')) /* Responsável por prover os arquivos estáticos */
app.use(bodyParser.urlencoded({extended: true})) // Transforma os dados em objeto
app.use(bodyParser.json()) //Transforma o Json em objeto

app.listen(8080, () => console.log('Executando...'))