const express = require('express')

const app = express()

// Config bodyParser
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Config handlebars
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))

app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
    res.render('homepage')
})

// Config routes
const routes = require('./routes/apiRoutes')

app.use('/api', routes)


app.listen(8080, () => {
    console.log('Server running at http://localhost:8080')
})