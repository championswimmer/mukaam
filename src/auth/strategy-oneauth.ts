import passport from 'passport'
import {Strategy as OneauthStrategy} from 'passport-oneauth'
import {VerifyCallback, VerifyFunctionWithRequest} from 'passport-oauth2'
import {Request} from 'express'

const oneauthStrategy = new OneauthStrategy({
  passReqToCallback: true,
  authorizationURL: '',
  callbackURL: '',
  clientID: '',
  clientSecret: '',
  tokenURL: '',
}, (req: Request, accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) => {


})
