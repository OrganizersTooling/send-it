const nodemailer = require('nodemailer')
const { readFileSync } = require('fs')
const { mountHelperOptions } = require('./helpers')

let config

try {
  config = require('./send-it.config')
} catch (error) {
  throw new Error('`send-it.config.js` not found on this level directory', error)
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

const template = readFileSync('./templates/default.html', 'utf8')

console.log('* Using', config.email)

const senders = config.recipers.map(async recipe => {
  const HELPER_OPTIONS = await mountHelperOptions({ ...config, template, recipe })
  return new Promise((resolve, reject) =>
    transporter.sendMail(HELPER_OPTIONS, (error, info) => error ? reject(error) : resolve(info))
  )
})


Promise
  .all(senders)
  .then(() => console.log('* All email has been sent..'))
  .catch(error => console.log('* Some error happen :(', error))