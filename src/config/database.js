const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/crud-Nuevo', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log('DB connect')).catch(err => console.log(err))