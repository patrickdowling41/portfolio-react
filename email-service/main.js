var nodemailer = require('nodemailer')
let aws = require('aws-sdk')
const Joi = require('@hapi/joi')
const yup = require('yup')
let bodyParser = require('body-parser')
let express = require('express')
let app = express()

// configure AWS SDK 
aws.config.loadFromPath('../../config.json')

// parse application/json
app.use(bodyParser.json())

// create Nodemailer SES transporter
let transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01'
    })
});

app.post('/api/v1/email', (req, res) => {

    sendResponseEmail(transporter, req.body.email)
    sendContactFormInfo(transporter, req.body.name, req.body.email, req.body.phoneNo, req.body.message)

    res.status(200).send('Success.')
})

// send email to user, validating they have completed the contact form.
function sendResponseEmail(transporter, email) {

    const contactMessage = `Thank you for contacting me, I will be in touch with you as soon as possible.
        
Kind Regards,
Patrick Dowling`

    transporter.sendMail({
        from: 'noreply@patdowling.net',
        to: email,
        subject: 'Thank you for contacting me!',
        text: contactMessage
    }, (err, info) => {
        console.log("Error: " + err)
        console.log("Info: " + info)
    });
}

// send email to myself, sending me their contact information.
function sendContactFormInfo(transporter, name, email, phoneNo, message) {

    const contactMessage = `Contacted by ${name}
Contact email left: ${email}
Contact number left:  ${phoneNo}
Message left: ${message}`

    transporter.sendMail({
        from: 'noreply@patdowling.net',
        to: 'patrick@patdowling.net',
        subject: 'New contact request',
        text: contactMessage
    }, (err, info) => {
        console.log("Error: " + err)
        console.log("Info: " + info)
    });
}

app.listen(3000)