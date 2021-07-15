const express = require('express');
const nodemailer = require('nodemailer')
const cors = require('cors'); 'cors'
const bodyParser = require('body-parser')
const fs = require('fs')
const { host, email, pass } = require('./.cred.json');

const app = express();
const mailContent = __dirname + '/email.html'

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.post('/sendmail', async (req, res) => {
    let username = req.body.userName || 'erro';
    let usermail = req.body.email || 'erro';

    let transporter = nodemailer.createTransport({
        host: host,
        port: 587,
        secure: false,
        auth: {
            user: email,
            pass: pass
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    let mailOptions = {
        from: `Gabriel | Hydra <gabrielgostosotestes@gmail.com>`,
        to: [usermail],
        subject: 'Obrigado por escolher a Hydra!',
        html: `<h1> Olá ${username}! </h1>`, //<img src="cid:inception">
        /* attachments: [{
            filename: 'inception.png',
            path: __dirname + '/inception.png',
            cid: 'inception'
        }] */
    }

    const info = await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            let error = {
                errorMessage: err.message
            }

            console.log('erro')
            res.send(JSON.stringify(error))
        }
        else {
            console.log('deu certo')
            res.send(JSON.stringify(info))
        }
    })
})

app.listen(3030, () => {
    console.log(`Listening in localhost:3030`)
})