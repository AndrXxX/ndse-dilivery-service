const express = require('express');
const router = express.Router();
const userSigninHandler = require('./handlers/UserSigninHandler');
const userSignupHandler = require('./handlers/UserSignupHandler');
const userSignoutHandler = require('./handlers/UserSignoutHandler');

router.post('/signin',
  userSigninHandler,
);

router.post('/signup',
  userSignupHandler,
);

router.post('/signout',
  userSignoutHandler,
);

module.exports = router;
