const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))
app.use(cors())

app.post('/send', (req, res) => {
    console.log('req')
    res.statusMessage = 'success'
    res.status(200).end()
})

module.exports = app