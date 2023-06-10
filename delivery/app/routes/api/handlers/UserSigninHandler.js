const formatter = require('../../../utils/ResponseFormatter');
const passport = require("passport");

module.exports = async (req, res) => {
  passport.authenticate('local', {}, (err, user) => {
    if (!user) {
      return res
        .status(401)
        .json(formatter.error("Неверный логин или пароль"));
    }
    return res
      .status(201)
      .json(formatter.ok({
        id: user.id,
        email: user.email,
        name: user.name,
        contactPhone: user.contactPhone,
      }));
  })(req, res);
};
