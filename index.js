const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const {
    create
} = require('express-handlebars')

require('dotenv').config()
// Require routes

const hbs = create({
    extname: 'hbs',
    defaultLayout: 'main.hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
})

// HBS connection
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

// express middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// Urlencoded middleware
app.use(express.urlencoded({
    extended: true
}))

const allstudents = require('./routes/allstudents')

app.use('/', allstudents)

try {
    mongoose.connect('mongodb://localhost:27017', (err) => {
        if (err) console.error(err);
        else console.log('MongoDB connected');
    })
} catch (error) {
    console.error(error);
}

const port = normalizePort(process.env.port || 3000)
app.listen(port, () => {
    console.log('Server working on port ' + port);
})

function normalizePort(val) {
    const num = parseInt(val)
    if (isNaN(num)) {
        return val
    }

    if (num) {
        return num
    }

    return false
}