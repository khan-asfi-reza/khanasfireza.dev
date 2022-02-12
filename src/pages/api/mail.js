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
        from: 'me@khanasfireza.dev',
        subject: "A new message from your website",
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    }
    mail.send(data)
        .then(()=>{
            res.statusCode = 200;
        }).catch(()=>{
            res.statusCode = 400;
    });
    if(res.statusCode === 200){
        res.json({ message: 'Successfully sent the message' })
    }else{
        res.json({ message: 'Message could not be delivered' })
    }
}
