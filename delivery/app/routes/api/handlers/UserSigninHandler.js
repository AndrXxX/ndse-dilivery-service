const formatter = require('../../../utils/ResponseFormatter');
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
      .json(formatter.ok({
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        contactPhone: req.user.contactPhone,
      }));
  };
  passport.authenticate('local', {}, (err, user) => {
    return user ? req.login(user, nextFunc) : nextFunc();
  })(req, res, nextFunc);
};
