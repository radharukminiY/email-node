const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg={
  to:'radharukmini.jetzy@gmail.com',
  from:'y.radhareddy12@gmail.com',
  subject:'sending mailwith Node for testing.',
  text:'It is easy to do with NodeJS',
  html:'<strong>It is easy to do with NodeJS</strong>',

};
sgMail.send(msg);
