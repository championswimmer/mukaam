import express from 'express'
import session from 'express-session'

import config = require('../config')

import passport from './auth/passport'

const app = express()

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: config.SECRETS.SESSION_SECRET
}))
app.use(passport.initialize())
app.use(passport.session())

app.listen(config.PORT, () => {

})