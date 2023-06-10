const express = require('express');
const router = express.Router();
const passport = require('passport');
const error404Middleware = require("../middleware/api/404");
const authMiddleware = require("../middleware/api/auth");
const userSigninHandler = require("./api/handlers/UserSigninHandler");

router.post('/signin',
  passport.authenticate('local'),
  userSigninHandler,
);

router.use(authMiddleware);
router.use(error404Middleware);

module.exports = router;
