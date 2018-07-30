import passport from 'passport'

passport.serializeUser((user: any, done) => {
  done(user.id)
})

passport.serializeUser((userId, done) => {

})

export default passport