// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function mailAPI(req, res) {
    const body = JSON.parse(req.body);
    const message = `
       Name: ${body.name}\r\n
       Email: ${body.email}\r\n
       Message: ${body.message}
    `;
    const data = {
        to: process.env.EMAIL,
        from: 'info@khanasfireza.dev',
        subject: "Message from your website - Khan Asfi Reza",
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    }
    await mail.send(data);
    await res.status(200).json({ message: 'Successfully sent the message' })
}
