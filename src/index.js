//modulos
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const hbs = require('express-handlebars')
const methodOverride = require('method-override')
//inicializar
const app = express()
require('./config/database')
//configuración

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', hbs({
    defaultLayout:  'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
//variables globales
//Rutas
app.use(require('./routes/index'))
app.use(require('./routes/registro'))
//Archivos estaticos

//escuchar servidor
app.listen(app.get('port'), () => {
    console.log('Server en puerto', app.get('port'))
})