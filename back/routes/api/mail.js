const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');


router.post('/', (req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "chatoncamionvaguelette@gmail.com",
      pass: ",;:=1234"
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let mailOptions = {
    from: "chatoncamionvaguelette@gmail.com", // sender address
    to: 'lea.godard.web@gmail.com', // list of receivers
    subject: 'Coucou ', // Subject line 
    text: 'Quick & Dirty', // plain text body
    html: "coucou pour le test" // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    res.sendStatus(200)
  });
});

module.exports = router;

