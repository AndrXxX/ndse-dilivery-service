const expressSession = require("express-session");
const { cookieSecret} = require("../../config");

module.exports =  expressSession({
  secret: cookieSecret,
  resave: false,
  saveUninitialized: false,
});
