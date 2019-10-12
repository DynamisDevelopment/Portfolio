const express = require('express')
const nodemailer = require('nodemailer')
var cors = require('cors');
const dotenv = require('dotenv')

dotenv.config()
const app = express()
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json())
app.use(cors());

app.post('/send', async (req, res) => {
    try {
        const output = `
        <h1>${req.body.name}</h1>
        <h3>${req.body.email}</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.HOSTEMAIL,
                pass: process.env.PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let mailOptions = {
            from: `"New Client" <${req.body.email}>`,
            to: process.env.HOSTEMAIL,
            subject: 'Node Contact Request',
            text: 'Hello world?',
            html: output
        };

        transporter.sendMail(mailOptions, (error, info) => error ? res.status(400).send(error) : res.status(200).send(output));

    } catch (e) { console.log(e) }
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log('Server is running...'))
