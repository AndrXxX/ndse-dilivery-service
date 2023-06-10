const express = require('express');
const router = express.Router();
const passport = require('passport');
const userSigninHandler = require('./handlers/UserSigninHandler');
const userSignupHandler = require('./handlers/UserSignupHandler');
const userSignoutHandler = require('./handlers/UserSignoutHandler');

router.post('/signin',
  passport.authenticate('local'),
  userSigninHandler,
);

router.post('/signup',
  userSignupHandler,
);

router.post('/signout',
  userSignoutHandler,
);

module.exports = router;
