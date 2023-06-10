const express = require('express');
const router = express.Router();
const passport = require('passport');
const error404Middleware = require("../middleware/api/404");
const authMiddleware = require("../middleware/api/auth");
const userSigninHandler = require("./api/handlers/UserSigninHandler");
const userSignupHandler = require("./api/handlers/UserSignupHandler");

router.post('/signin',
  passport.authenticate('local'),
  userSigninHandler,
);

router.post('/signup',
  userSignupHandler,
);

router.use(authMiddleware);
router.use(error404Middleware);

module.exports = router;