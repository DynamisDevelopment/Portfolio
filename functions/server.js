const nodemailer = require('nodemailer')

exports.handler = async function (event, context, callback) {
    const message = JSON.parse(event.body)
    console.log(message)

    const output = `
        <h1>${message.name}</h1>
        <h3>${message.email}</h3>
        <p>${message.message}</p>
        `

    let transporter = await nodemailer.createTransport({
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

    await transporter.sendMail({
        from: message.email,
        to: process.env.HOSTEMAIL,
        subject: 'New Client',
        text: output
    }, (error, info) => {
        if (error) callback(error)
        else callback(null, {
            statusCode: 200,
            body: "Ok"
        })
    })
}
