// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function mailAPI(req, res) {
    const body = JSON.parse(req.body);
    const message = `
       Name: ${body.name}\r\n
       Email: ${body.email}\r\n
       Message: ${body.message}
    `;
    const data = {
        to: process.env.EMAIL,
        from: 'website@khanasfireza.dev',
        subject: "A new message from your website",
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    }
    mail.send(data)
        .then(()=>{

        }).catch(()=>{

    });
    res.status(200).json({ message: 'Successfully sent the message' })
}
