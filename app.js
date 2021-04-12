const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
<<<<<<< HEAD
  to: 'test1@gmail.com',
  from: 'test2@gmail.com',
=======
  to: 'radharukmini.jetzy@gmail.com',
  from: 'gdr.sateesh12@gmail.com',
>>>>>>> f5a7703343bd42155726540540d8c3bc089b9099
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
