const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
// const connect = require('./src/services')
const {connectDb} = require('./src/models')
// import models, { connectDb } from './models';

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/employees', require('./src/routes/employees'));

connectDb().then(async () => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
});
