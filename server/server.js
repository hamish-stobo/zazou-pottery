const path = require('path')
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const { google } = require('googleapis')
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))
app.use(cors())

const { OAuth2 } = google.auth
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'

const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS,
  } = process.env

const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    OAUTH_PLAYGROUND
)

oauth2Client.setCredentials({
      refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
    })

const accessToken = oauth2Client.getAccessToken()

const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: SENDER_EMAIL_ADDRESS,
        clientId: MAILING_SERVICE_CLIENT_ID,
        clientSecret: MAILING_SERVICE_CLIENT_SECRET,
        refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
        accessToken,
      },
})

transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log(success)
      console.log('Server is ready to take messages');
    }
  });
  
app.post('/send', (req, res, next) => {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    // server/public/images/catalogue/chillinsanta.jfif
    const filePath = `${__dirname}/public/${req.body.filePath}`
    const parsedImg = filePath.substring(16, (filePath.length - 5))
    const content = `name: ${name} \nemail: ${email} \nmessage: ${message} `
    console.log('filepath to image ', filePath)
    const mail = {
      from: email,
      to: 'hh.stobo@gmail.com',  // Change to email address that you want to receive messages on
      subject: 'New Message from your Zazou Pottery Studio Website',
      text: content,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
             <p><strong>Message:</strong> \n${message}</p>
              ${req.body.filePath && '<img style="max-width: 200px; margin-top: 10px;" src="cid:kiqlI8ppW99HrqB6"/>'}`,
      attachments: req.body.filePath && [{
        fileName: parsedImg,
        path: filePath,
        cid: 'kiqlI8ppW99HrqB6'
    }]
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