const nodemailer = require('nodemailer')

let config

try {
  config = require('./send-it.config.json')
} catch (error) {
  throw new Error('`send-it.config.json` not found on this level directory', error)
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: config.email,
    pass: config.password
  },
  tls: {
    rejectUnauthorized: false
  }
})
const HELPER_OPTIONS = {
  from: `"${config.name}" <${config.email}>`,
  subject: config.subject,
  html: '<h1>Hello World from this email :)'
}

console.log('* Using', config.email)

const senders = config.recipers.map(recipe => {
  HELPER_OPTIONS.to = recipe
  return new Promise((resolve, reject) =>
    transporter.sendMail(HELPER_OPTIONS, (error, info) => error ? reject(error) : resolve(info))
  )
})


Promise.all(senders)
  .then(() => console.log('* All email has been sent..'))
  .catch(error => console.log('* Some error happen :(', error))