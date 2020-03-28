const path = require('path')
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))
app.use(cors())

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASS  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });
  
app.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = `name: ${name} \nemail: ${email} \nmessage: ${message} `
    console.log(content)
    const mail = {
      from: email,
      to: 'hh.stobo@gmail.com',  // Change to email address that you want to receive messages on
      subject: 'Request from Zazou website',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
          console.log(err)
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })

module.exports = app