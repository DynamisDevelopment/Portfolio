const nodemailer = require('nodemailer')

exports.handler = function (event, context, callback) {
    const message = JSON.parse(event.body)
    const output = `
        <h1>${message.name}</h1>
        <h3>${message.email}</h3>
        <p>${message.message}</p>
        `

    let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: process.env.HOSTEMAIL,
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    transporter.sendMail({
        from: message.email,
        to: process.env.HOSTEMAIL,
        subject: 'New Client',
        text: output
    }, (error, info) => {
        if (error) callback(error)
        else callback(null, {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            body: "Ok"
        })
    })
}
