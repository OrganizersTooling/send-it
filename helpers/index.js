const md5 = require('md5')
const axios = require('axios')
const { renderString } = require('nunjucks')

exports.mountHtml = async ({ template, ob, email }) => {
  const DEFAULT_IMAGE = 'https://metadisplay.de/wp-content/uploads/2017/01/user_m.png'
  const hash = md5(email)
  const { data: avatar } = await axios.get('https://www.gravatar.com/avatar/' + hash)
  const vars = {
    avatar: avatar || DEFAULT_IMAGE,
    ...ob
  }
  return renderString(template, vars)
}