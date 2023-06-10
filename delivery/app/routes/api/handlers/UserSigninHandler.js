const formatter = require('../../../utils/ResponseFormatter');

module.exports = async (req, res) => {
  const user = req.user;
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
};
