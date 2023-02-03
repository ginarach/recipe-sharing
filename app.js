let express = require('express')
let app = express()
let port = 3000
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

let models = require('./models/index')
let appRoute = require('./app/routes/index')

app.use(express.json())
app.use('/', appRoute)


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })