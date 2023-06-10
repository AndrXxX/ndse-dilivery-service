const passport = require( 'passport');
const passportLocal = require( 'passport-local');
const usersStore = require('../Modules/UserModule');
const checker = require('../utils/HashGenerator');

const verify = async (email, password, done) => {
  const user = await usersStore.findByEmail(email);
  if (!user || !checker.isValid(password, user.password)) {
    return done(new Error('Неверное имя или пароль'));
  }
  return done(null, user);
}

const options = {
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: false,
}

module.exports = () => {
  passport.use('local', new passportLocal.Strategy(options, verify))
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  })
  passport.deserializeUser(async (id, cb) => {
    const user = await usersStore.findById(id);
    cb(null, user);
  })

};
