<p align="center">
  <img src="https://raw.githubusercontent.com/OrganizersTooling/send-it/master/templates/assets/send-it.png" width="60" />
  <h3 align="center">SendIt</h3>
  <p align="center">Better and fastest way to send emails to multiple recipients.</p>

  <p align="center">
    <img src="https://raw.githubusercontent.com/OrganizersTooling/send-it/master/templates/assets/sendit-demo.png" style="width: 100%; height: auto" />
  </p>

  <p align="center">
  <a href="http://standardjs.com/">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg">
  </a>
  </p>
</p>

---

### Install

```sh
npm install -g @halfeld/send-it
``` 

### How to use

```sh
# Run this command in the same directory of `send-it.config.js`
send-it
```

_send-it.config.js_
```js
module.exports = {
  name: 'Your name',
  email: 'hey@gmail.com',
  password: 'passwordOfEmailAbove',
  subject: 'SendIt is Awesome!',
  // Markdown is supported
  emailText: `
    # Hello World    
    This is a paragrapher with **strong** and _italic_ texts!
  `,
  recipients: [
    'foo@example.com',
    'bar@example.me'
  ]
}
```

### E-mail clients

- [x] Gmail (you need to enabled [this](https://myaccount.google.com/lesssecureapps))
- [ ] Hotmail
- [ ] Others
