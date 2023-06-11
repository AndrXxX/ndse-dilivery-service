const formatter = require('../../../utils/ResponseFormatter');
const userFormatter = require('../../../utils/UserFormatter');
const passport = require("passport");

module.exports = async (req, res) => {
  const nextFunc = () => {
    if (!req.user) {
      return res
        .status(401)
        .json(formatter.error("Неверный логин или пароль"));
    }
    return res
      .status(201)
      .json(formatter.ok(userFormatter.format(req.user)));
  };
  passport.authenticate('local', {}, (err, user) => {
    return user ? req.login(user, nextFunc) : nextFunc();
  })(req, res, nextFunc);
};
