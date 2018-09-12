const md5 = require('md5')
const nunjucks = require('nunjucks')
const md = require('marked')

const mountHtml = async ({ template, emailText, name, email }) => {
  const DEFAULT_IMAGE = 'https://metadisplay.de/wp-content/uploads/2017/01/user_m.png'

  const hash = md5(email || '')
  const avatar = 'https://www.gravatar.com/avatar/' + hash + '.jpeg?size=500'
  const vars = {
    avatar: email ? avatar : DEFAULT_IMAGE,
    emailText,
    name
  }
  nunjucks.configure({ autoescape: false })
  return await nunjucks.renderString(template, vars)
}

const parseEmailText = (text) =>
  text
    .trim()
    .replace(/($\s{5})+/, '')

exports.mountHelperOptions = async ({ name, email, subject, emailText, template, recipe }) => ({
  from: `"${name}" <${email}>`,
  subject: subject,
  to: recipe,
  html: await mountHtml({
    template,
    emailText: md(parseEmailText(emailText)),
    name: name,
    email: email
  })
})