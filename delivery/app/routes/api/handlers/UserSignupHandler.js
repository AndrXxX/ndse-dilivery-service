const usersStore = require('../../../Modules/UserModule');
const formatter = require('../../../utils/ResponseFormatter');

module.exports = async (req, res, next) => {
  let user = await usersStore.findByEmail(req.body.email);
  if (user) {
    return res
      .status(401)
      .json(formatter.error("email занят"));
  }
  try {
    user = await usersStore.create(req.body);
  } catch (e) {
    const error = e.errors.name.message || "Ошибка при сохранении пользователя";
    return res
      .status(401)
      .json(formatter.error(error));
  }

  res
    .status(201)
    .json(formatter.ok({
      id: user.id,
      email: user.email,
      name: user.name,
      contactPhone: user.contactPhone,
    }));
  return next();
}
