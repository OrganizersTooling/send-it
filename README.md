<p align="center">
  <img src="templates/assets/send-it.png" width="60" />
  <h3 align="center">SendIt</h3>
  <p align="center">Easy way to send emails to multiple recipers.</p>

  <p align="center">
  <a href="http://standardjs.com/">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg">
  </a>
  </p>
</p>

---

### Install

```sh
npm install -g send-it
``` 

### How to use

```sh
# Run this command in the same directory of `send-it.config.json`
send-it
```

_send-it.config.json_
```json
{
  "name": "Your name",
  "email": "hey@gmail.com",
  "password": "passOfEmailAbove",
  "subject": "Email testing sender",
  "recipers": [
    "foo@example.com",
    "bar@example.me"
  ]
}
```

### E-mail clients

- [x] Gmail (you need to enabled [this](https://myaccount.google.com/lesssecureapps))
- [ ] Hotmail
- [ ] Others